const swiper = new Swiper('.auctions__slider', {
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1', // Включить стрелочки
    },
    slidesPerView: 2.8,
    autoHeight: true,
    grabCursor: true,
    freeMode: true,
    spaceBetween: 42,
});

const swiper2 = new Swiper('.popular__slider', {
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2', // Включить стрелочки
    },
    slidesPerView: 2.3,
    autoHeight: true,
    grabCursor: true,
    freeMode: true,
    spaceBetween: 36,
});

const swiper3 = new Swiper('.categories__slider', {
    slidesPerView: 3,
    autoHeight: true,
    grabCursor: true,
    freeMode: true,
    spaceBetween: 36,
});
