// מאזין לאירוע של שליחת הטופס
document.getElementById('couponForm').addEventListener('submit', function(event) {
    event.preventDefault();  // עוצר את שליחת הטופס (מונע רענון דף)

    const url = document.getElementById('siteUrl').value.trim();  // מקבל את ה-URL שהמשתמש הזין

    // קודם כל, נוודא שה-URL תקין
    if (!isValidURL(url)) {
        showError('הכנס כתובת אתר תקינה');  // הודעת שגיאה אם ה-URL לא תקין
        return;
    }

    // אם ה-URL תקין, מתחילים את החיפוש אחרי קופון
    showLoading(true);  // הצגת הודעת טעינה
    getCouponCode(url);  // חיפוש קוד קופון
});

// פונקציה שתאמת את ה-URL (אם הוא תקין)
function isValidURL(url) {
    const pattern = /^(ftp|http|https):\/\/[^ "]+$/;  // תבנית לאימות URL
    return pattern.test(url);  // אם ה-URL מתאים לתבנית, הוא תקין
}

// פונקציה שמביאה קוד קופון עבור URL נתון
function getCouponCode(url) {
    // כאן כדאי לחבר ל-API או לפונקציה שמחזירה קוד קופון, כרגע נעשה שימוש בקוד קופון סטטי לדוגמה
    const couponCode = "CUPON2025";  // קוד קופון לדוגמה
    
    // אם לא נמצא קופון או יש בעיה, נציג הודעת שגיאה
    if (!couponCode) {
        showError('לא נמצא קופון לאתר זה');
    } else {
        showError('');  // לא מציגים הודעות שגיאה
        showLoading(false);  // מסתירים את הודעת הטעינה
        document.getElementById('couponResult').innerHTML = `
            <p>הקופון שלך לאתר ${url} הוא: <strong>${couponCode}</strong></p>
        `;
    }
}

// פונקציה שמציגה הודעת שגיאה במידה ויש
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
        loadingContainer.innerHTML = `<p style="color: gray;">מחפשים קופון... אנא המתן.</p>`;  // הודעת טעינה
    } else {
        loadingContainer.innerHTML = '';  // מסתירים את הודעת הטעינה
    }
}
