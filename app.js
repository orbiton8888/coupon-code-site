document.getElementById('couponForm').addEventListener('submit', function(event) {
    event.preventDefault();  // עוצר את שליחת הטופס
    const url = document.getElementById('siteUrl').value;  // מקבל את ה-URL שהמשתמש הזין
    getCouponCode(url);  // פונקציה שמביאה קוד קופון
});

function getCouponCode(url) {
    // כרגע, נותנים קוד קופון ידני לדוגמה
    let couponCode = "CUPON2025";  // קוד קופון לדוגמה

    // הצגת התוצאה למשתמש
    document.getElementById('couponResult').innerHTML = `
        <p>הקופון שלך לאתר ${url} הוא: <strong>${couponCode}</strong></p>
    `;
}

// טיפול בשינוי שפה
document.getElementById('language').addEventListener('change', function(event) {
    const lang = event.target.value;
    if (lang === 'en') {
        document.querySelector('h1').textContent = "Welcome to Coupon Code Site!";
        document.querySelector('label').textContent = "Enter Website URL:";
        document.querySelector('button').textContent = "Get Coupons";
        document.querySelector('footer p').textContent = "© 2025 Coupon Codes - All Rights Reserved";
    } else {
        document.querySelector('h1').textContent = "ברוך הבא לאתר קוד קופונים!";
        document.querySelector('label').textContent = "הכנס כתובת אתר:";
        document.querySelector('button').textContent = "הצג קופונים";
        document.querySelector('footer p').textContent = "© 2025 קוד קופונים - כל הזכויות שמורות";
    }
});
