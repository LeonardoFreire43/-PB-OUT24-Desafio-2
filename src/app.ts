document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const submitButton = document.getElementById('submit') as HTMLButtonElement;

    submitButton.addEventListener('click', () => {
        const email = emailInput.value;
        console.log(email);
        if (validateEmail(email)){
            alert('Email is valid');
        } else {
            alert('Email is not valid email address');
        }
    });

    function validateEmail(email: string): boolean {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});