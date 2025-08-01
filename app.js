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
    fetchCoupons(url);  // חיפוש קופונים
});

// פונקציה שתאמת את ה-URL (אם הוא תקין)
function isValidURL(url) {
    const pattern = /^(ftp|http|https):\/\/[^ "]+$/;  // תבנית לאימות URL
    return pattern.test(url);  // אם ה-URL מתאים לתבנית, הוא תקין
}

// פונקציה שמביאה עד 10 קופונים עבור URL נתון
function fetchCoupons(url) {
    // חיבור API דמוי-מציאות שמחזיר קופונים
    // בגרסה אמיתית כאן יוכל להיות חיבור ל-API חיצוני שיחזיר את המידע

    const coupons = [
        {
            code: "CUPON2025",
            lastUsed: "2025-08-01",
            checkCount: 5
        },
        {
            code: "DISCOUNT50",
            lastUsed: "2024-06-15",
            checkCount: 8
        },
        {
            code: "SUMMER2024",
            lastUsed: "2024-07-20",
            checkCount: 3
        },
        {
            code: "WELCOME10",
            lastUsed: "2025-05-10",
            checkCount: 2
        },
        {
            code: "BLACKFRIDAY",
            lastUsed: "2023-11-25",
            checkCount: 10
        },
        // הוספתי קופונים נוספים לדוגמה
    ];

    // מציגים את הקופונים בצורה מסודרת
    displayCoupons(coupons);
}

// פונקציה שמציגה את הקופונים
function displayCoupons(coupons) {
    const resultContainer = document.getElementById('couponResult');
    resultContainer.innerHTML = '';  // מנקה את התוצאה הקודמת

    if (coupons.length === 0) {
        showError('לא נמצא קופון לאתר זה');
        showLoading(false);
        return;
    }

    let couponHTML = "<h3>הקופונים שלך:</h3><ul>";
    coupons.slice(0, 10).forEach((coupon, index) => {
        couponHTML += `
            <li>
                <strong>קוד קופון:</strong> ${coupon.code}<br>
                <strong>שימוש אחרון:</strong> ${coupon.lastUsed}<br>
                <strong>נבדק ${coupon.checkCount} פעמים</strong><br>
                <hr>
            </li>
        `;
    });
    couponHTML += "</ul>";

    resultContainer.innerHTML = couponHTML;
    showLoading(false);  // מסתירים את הודעת הטעינה
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
