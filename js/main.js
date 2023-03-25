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
