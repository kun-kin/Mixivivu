var swiper = new Swiper(".SwiperReviews", {
    slidesPerView: 1,
    loop: true,
    autoplay: false,
    speed: 600,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

var swiper = new Swiper(".yachtdetail-slide", {
    // slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        991: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
});

var swiper = new Swiper(".tourdetail-slide", {
    // slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        991: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
});




var roomModalThumbs = new Swiper(".room-modal-thumbs", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var roomModalImg = new Swiper(".room-modal-img", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: roomModalThumbs,
    },
});