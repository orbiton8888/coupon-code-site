document.getElementById('couponForm').addEventListener('submit', function(event) {
    event.preventDefault();  // עוצר את שליחת הטופס
    const url = document.getElementById('siteUrl').value;  // מקבל את ה-URL מהמשתמש
    getCouponCode(url);  // קורא לפונקציה שמביאה את קוד הקופון
});

function getCouponCode(url) {
    const apiKey = 'your-api-key';  // הכנס את ה-API Key שלך כאן
    const apiUrl = `https://api.couponapi.com/v1/coupons?site=${url}&apiKey=${apiKey}`;

    // מבצע קריאה ל-API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data && data.coupons && data.coupons.length > 0) {
                // אם קיבלנו קופונים, נציג אותם
                const coupon = data.coupons[0].code;  // מניחים שהקופון הראשון הוא הכי טוב
                document.getElementById('couponResult').innerHTML = `
                    <p>הקופון שלך לאתר ${url} הוא: <strong>${coupon}</strong></p>
                `;
            } else {
                // אם לא נמצא קופון
                document.getElementById('couponResult').innerHTML = `
                    <p>לא נמצאו קופונים לאתר ${url}.</p>
                `;
            }
        })
        .catch(error => {
            console.error('Error fetching coupon data:', error);
            document.getElementById('couponResult').innerHTML = `
                <p>אירעה שגיאה בעת קבלת הקופון. נסה שוב מאוחר יותר.</p>
            `;
        });
}
