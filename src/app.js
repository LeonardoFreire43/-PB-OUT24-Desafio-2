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
    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
