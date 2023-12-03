const swiper = new Swiper('.mySwiper', {
    
    slidesPerView: 1,
    spaceBetween: 80,
    grabCursor: true,
    loop: true,
    breakpoints: {
        768: {
            slidesPerVierw: 3
        }
    }
})