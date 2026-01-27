// Swiper de Portada
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    }
});

// Lógica del Botón "Ver más"
const loadMoreBtn = document.querySelector('#load-more');
const elementList = [...document.querySelectorAll('.container-news .card-new')];

if (loadMoreBtn && elementList.length > 0) {
    
    let currentItems = 6;
    const increment = 6;

    elementList.forEach((element, index) => {
        if (index >= currentItems) {
            element.classList.add('hidden');
        }
    });

    if (elementList.length <= currentItems) {
        loadMoreBtn.style.display = 'none';
    }

    loadMoreBtn.addEventListener('click', () => {
        let count = 0;
        
        for (let i = 0; i < elementList.length; i++) {
            if (elementList[i].classList.contains('hidden')) {
                elementList[i].classList.remove('hidden');
                count++;
            }
            if (count === increment) break;
        }

        currentItems += increment;

        const remainingHidden = document.querySelectorAll('.card-new.hidden').length;
        if (remainingHidden === 0) {
            loadMoreBtn.style.display = 'none';
        }
    });
}