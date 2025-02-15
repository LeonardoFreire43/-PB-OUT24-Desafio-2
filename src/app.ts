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

    function validateEmail(email: string): boolean {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});