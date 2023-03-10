var swiper =  new Swiper(".mainslider", {
    slidesPerView: 1,
    loop: true,
    speed: 500,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper =  new Swiper(".carousel", {
    autoplay: {
        delay: 6000,
        disableOnInteraction: true,
    },
    slidesPerView: 1,
    loop: true, 
    spaceBetween: 10,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        607: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
    },
});
var swiper =  new Swiper(".carousel-2", {
    slidesPerView:3,
    slidesPerColumn:2,
    slidesPerGroup:3,
    spaceBetween: 10,
    slidesPerColumnFill:"row",
    grabCursor:true,
    autoplay:{ delay: 3000, disableOnInteraction: true },
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});
var swiper =  new Swiper(".carousel-3", {
    autoplay:{ delay: 3000, disableOnInteraction: true },
    slidesPerView: 3,   
    loop: true,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
});
    // slider vertical
var swiper =  new Swiper(".slider-vertical", {
    direction: 'vertical',
    slidesPerView: 1.5,
    spaceBetween: 5,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    breakpoints: {
        607: {
            slidesPerView: 2.5,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
    },
    navigation: {
        clickable: true,
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});