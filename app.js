document.getElementById('couponForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('siteUrl').value;
    getCouponCode(url);
});

function getCouponCode(url) {
    // נניח כאן שאנחנו מקבלים קוד קופון באופן ידני
    // כמובן שבפועל יהיה כאן בקשה לשרת או API
    let couponCode = "קודקופון123";

    // הדפסת התוצאה למשתמש
    document.getElementById('couponResult').innerHTML = `
        <p>הקופון שלך לאתר ${url} הוא: <strong>${couponCode}</strong></p>
    `;
}

