function newsSlider() {
    var swiper = new Swiper('.news .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            320: {
                slidesPerView: "auto",
                spaceBetween: 23,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    })
}

function newsSlider2() {
    var swiper = new Swiper('.news-item__slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.news-item__slider .swiper-button-next',
            prevEl: '.news-item__slider .swiper-button-prev',
        },
    })
}

newsSlider()
newsSlider2()
