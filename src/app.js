function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.(com|net|org|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)$/;
    return re.test(email);
}
document.addEventListener('DOMContentLoaded', function () {
    var emailInput = document.getElementById('email');
    var submitButton = document.getElementById('submit');
    var popup = document.getElementById('popup');
    var popupMessage = document.getElementById('popup-message');
    var closeButton = document.querySelector('.close');
    submitButton.addEventListener('click', function () {
        var email = emailInput.value;
        if (validateEmail(email)) {
            popupMessage.textContent = 'Email is valid';
        }
        else {
            popupMessage.textContent = 'Please enter a valid email address';
        }
        popup.style.display = 'block';
    });
    closeButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });
    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
// Lógica para o layout mobile
var mobileEmailInput = document.getElementById('mobile-email');
var mobileSubmitButton = document.getElementById('mobile-submit');
var mobilePopup = document.getElementById('mobile-popup');
var mobilePopupMessage = document.getElementById('mobile-popup-message');
var mobileCloseButton = mobilePopup.querySelector('.close');
mobileSubmitButton.addEventListener('click', function () {
    var email = mobileEmailInput.value;
    if (validateEmail(email)) {
        mobilePopupMessage.textContent = 'Email is valid';
    }
    else {
        mobilePopupMessage.textContent = 'Please enter a valid email address';
    }
    mobilePopup.style.display = 'block';
});
mobileCloseButton.addEventListener('click', function () {
    mobilePopup.style.display = 'none';
});
window.addEventListener('click', function (event) {
    if (event.target === mobilePopup) {
        mobilePopup.style.display = 'none';
    }
});
