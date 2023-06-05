const slider1 = new Swiper ('.swiper-window', {
    speed: 400,
    spaceBetween: 10,
    navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
    pagination: {
		el: '.swiper-pagination',
		clickable: true,
        dynamicBullets: true,
	},
    initialSlide: 3,
    loop: true,
    autoplay: {
        delay: 3500,
        stopOnLastSlide: false,
        disableOnInteractio: true,
    }
});

const slider2 = new Swiper ('.product-swiper', {
    speed: 500,
    spaceBetween: 10,
    navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
    simulateTouch: false,
    initialSlide: 3,
    slidesPerView: 5,
    loop: true,
    autoplay: {
        delay: 3500,
        stopOnLastSlide: false,
        disableOnInteractio: true,
    }
})

