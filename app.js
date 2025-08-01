document.getElementById('couponForm').addEventListener('submit', function(event) {
    event.preventDefault();  // עוצר את שליחת הטופס
    const url = document.getElementById('siteUrl').value.trim();  // מקבל את ה-URL שהמשתמש הזין
    
    // קודם כל, נוודא שה-URL תקין
    if (!isValidURL(url)) {
        showError('הכנס כתובת אתר תקינה');  // הודעת שגיאה אם ה-URL לא תקין
        return;
    }
    
    // אם ה-URL תקין, מתחילים את החיפוש אחרי קופון
    showLoading(true);  // הצגת הודעת טעינה
    getCouponCode(url);
});

// פונקציה שתאמת את ה-URL
function isValidURL(url) {
    const pattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return pattern.test(url);  // אם ה-URL מתאים לתבנית, הוא תקין
}

// פונקציה שמביאה קוד קופון
function getCouponCode(url) {
    // כאן צריך להיות החיבור ל-API או חיפוש בקוד קופון
    // נניח כרגע שמחזירים קוד קופון סטטי לדוגמה:
    const couponCode = "CUPON2025";  // קוד קופון לדוגמה
    
    // אם יש בעיה בהשגת הקופון, נציג הודעה מתאימה
    if (!couponCode) {
        showError('לא נמצא קופון לאתר זה');
    } else {
        // אם יש קופון, נציג את התוצאה
        showError('');  // לא מציגים הודעות שגיאה
        showLoading(false);  // מסתירים את הודעת הטעינה
        document.getElementById('couponResult').innerHTML = `
            <p>הקופון שלך לאתר ${url} הוא: <strong>${couponCode}</strong></p>
        `;
    }
}

// פונקציה שמציגה הודעת שגיאה
function showError(message) {
    const errorContainer = document.getElementById('couponResult');
    if (message) {
        errorContainer.innerHTML = `<p style="color: red;">${message}</p>`;  // מציגים את ההודעה באדום
    } else {
        errorContainer.innerHTML = '';  // אם אין שגיאה, לא מציגים הודעה
    }
}

// פונקציה שמציגה או מסתירה את הודעת הטעינה
function showLoading(isLoading) {
    const loadingContainer = document.getElementById('couponResult');
    if (isLoading) {
        loadingContainer.innerHTML = `<p>מחפשים קופון... אנא המתן.</p>`;  // הצגת הודעת טעינה
    } else {
        loadingContainer.innerHTML = '';  // מסתירים את הודעת הטעינה
    }
}
