function validateEmail(email) {
    var re = /^[^\s@]+@((gmail|hotmail|outlook|yahoo|icloud|live|aol|msn|protonmail)\.com|[a-zA-Z0-9.-]+\.(gov|edu|mil|org|net|com|br|gov\.br|edu\.br))$/i;
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
// carrossel desktop
var currentIndex = 0;
var itemsPerPage = 3; // Número de itens por "página"
var items = document.querySelectorAll('.carousel-track .homepage-inner1, .carousel-track .homepage-inner2, .carousel-track .homepage-inner3, .carousel-track .homepage-inner4, .carousel-track .homepage-inner5, .carousel-track .homepage-inner6');
var totalItems = items.length;
var track = document.querySelector('.carousel-track');
var nextButton = document.querySelector('.next');
var prevButton = document.querySelector('.prev');
if (track && nextButton && prevButton) {
    nextButton.addEventListener('click', function () {
        if (currentIndex + itemsPerPage < totalItems) {
            currentIndex += itemsPerPage;
        }
        else {
            currentIndex = 0;
        }
        updateCarouselPosition();
    });
    prevButton.addEventListener('click', function () {
        if (currentIndex - itemsPerPage >= 0) {
            currentIndex -= itemsPerPage;
        }
        else {
            currentIndex = totalItems - itemsPerPage;
        }
        updateCarouselPosition();
    });
}
function updateCarouselPosition() {
    if (track) {
        var itemWidthWithMargin = 500 + 30;
        track.style.transform = "translateX(-".concat(currentIndex * itemWidthWithMargin, "px)");
    }
}
function initializeCarousel() {
    updateCarouselPosition();
}
initializeCarousel();
