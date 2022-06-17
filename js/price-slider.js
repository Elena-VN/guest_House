const swiperPrice = new Swiper('.price__swiper', {
	slidesPerView: 1,
	spaceBetween: 20,
	swiper: Swiper,
	loop: true,
	centeredSlides: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	}
})