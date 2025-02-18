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

// carrossel desktop

let currentIndex: number = 0;
const itemsPerPage: number = 3;
const items: NodeListOf<HTMLElement> = document.querySelectorAll(
    '.carousel-track .homepage-inner1, .carousel-track .homepage-inner2, .carousel-track .homepage-inner3, .carousel-track .homepage-inner4, .carousel-track .homepage-inner5, .carousel-track .homepage-inner6'
);
const totalItems: number = items.length;
const track: HTMLElement | null = document.querySelector('.carousel-track');

const nextButton: HTMLElement | null = document.querySelector('.next');
const prevButton: HTMLElement | null = document.querySelector('.prev');

if (track && nextButton && prevButton) {
    nextButton.addEventListener('click', () => {
        if (currentIndex + itemsPerPage < totalItems) {
            currentIndex += itemsPerPage;
        } else {
            currentIndex = 0; 
        }
        updateCarouselPosition();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex - itemsPerPage >= 0) {
            currentIndex -= itemsPerPage; 
        } else {
            currentIndex = totalItems - itemsPerPage; 
        }
        updateCarouselPosition();
    });
}

function updateCarouselPosition() {
    if (track) {
        const itemWidthWithMargin = 500 + 30; 
        track.style.transform = `translateX(-${currentIndex * itemWidthWithMargin}px)`;
    }
}

function initializeCarousel() {
    updateCarouselPosition(); 
}

initializeCarousel();


// carrossel mobile
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track-mobile') as HTMLElement;
    const prevButton = document.querySelector('.prev-mobile') as HTMLButtonElement;
    const nextButton = document.querySelector('.next-mobile') as HTMLButtonElement;
    const items = document.querySelectorAll('.carousel-track-mobile > div') as NodeListOf<HTMLElement>;

    if (!track || !prevButton || !nextButton || items.length === 0) {
        console.error('Erro: elementos do carrossel não encontrados.');
        return;
    }

    let currentIndex = 0;

    function updateCarousel() {
        const itemWidth = items[0].offsetWidth; 
        const offset = -(currentIndex * itemWidth); 
        track.style.transform = `translateX(${offset}px)`;
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; 
        }
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = items.length - 1; 
        }
        updateCarousel();
    });

    updateCarousel();
});
