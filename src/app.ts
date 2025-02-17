function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@((gmail|hotmail|outlook|yahoo|icloud|live|aol|msn|protonmail)\.com|[a-zA-Z0-9.-]+\.(gov|edu|mil|org|net|com|br|gov\.br|edu\.br))$/i;
    return re.test(email);
}

document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const submitButton = document.getElementById('submit') as HTMLButtonElement;
    const popup = document.getElementById('popup') as HTMLDivElement;
    const popupMessage = document.getElementById('popup-message') as HTMLParagraphElement;
    const closeButton = document.querySelector('.close') as HTMLSpanElement;

    submitButton.addEventListener('click', () => {
        const email = emailInput.value;
        if (validateEmail(email)) {
            popupMessage.textContent = 'Email is valid';
        } else {
            popupMessage.textContent = 'Please enter a valid email address';
        }
        popup.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

// Lógica para o layout mobile
const mobileEmailInput = document.getElementById('mobile-email') as HTMLInputElement;
const mobileSubmitButton = document.getElementById('mobile-submit') as HTMLButtonElement;
const mobilePopup = document.getElementById('mobile-popup') as HTMLDivElement;
const mobilePopupMessage = document.getElementById('mobile-popup-message') as HTMLParagraphElement;
const mobileCloseButton = mobilePopup.querySelector('.close') as HTMLSpanElement;

mobileSubmitButton.addEventListener('click', () => {
    const email = mobileEmailInput.value;
    if (validateEmail(email)) {
        mobilePopupMessage.textContent = 'Email is valid';
    } else {
        mobilePopupMessage.textContent = 'Please enter a valid email address';
    }
    mobilePopup.style.display = 'block';
});

mobileCloseButton.addEventListener('click', () => {
    mobilePopup.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === mobilePopup) {
        mobilePopup.style.display = 'none';
    }
});