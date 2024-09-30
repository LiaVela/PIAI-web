/********************SWIPER DE NOTAS INFORMATIVAS********************/
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 6,
      slideShadows: true,
    },
    loop: true,
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    }

  });

  
  /********************SWIPER DE MAIN********************/
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
    
    autoplay:{
        delay:4000,
        disableOnInteraction:false,
    }
    });

  
  /********************VARIABLES PARA CLICK EN NAVBAR********************/
  const bar = document.getElementById("bar");
  const close = document.getElementById("close");
  const nav = document.getElementById("navbar");
  
  if (bar) {
    bar.addEventListener("click", () => {
      nav.classList.add("active");
    })
  }

  if (close) {
    close.addEventListener("click", () => {
      nav.classList.remove("active");
    })
  }