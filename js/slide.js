const swiper = new Swiper('.photo__swiper', {
	slidesPerView: 1,
	spaceBetween: 10,
	swiper: Swiper,
	breakpoints: {
		768: {
			slidesPerView: 1.76,
			spaceBetween: 10
		},
		880: {
			slidesPerView: 2,
			spaceBetween: 10
		},
		920: {
			slidesPerView: 2.1,
			spaceBetween: 10
		},
		1020: {
			slidesPerView: 2.3,
			spaceBetween: 10
		},
		1080: {
			slidesPerView: 2.4,
			spaceBetween: 20
		},
		1160: {
			slidesPerView: 2.6,
			spaceBetween: 20
		},
		1310: {
			slidesPerView: 2.8,
			spaceBetween: 20
		},
		1400: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		1520: {
			slidesPerView: 3.5,
			spaceBetween: 20
		},
		1715: {
			slidesPerView: 3.8,
			spaceBetween: 20
		},
		1820: {
			slidesPerView: 4,
			spaceBetween: 20
		}
	},
	loop: true,
	centeredSlides: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	}
})

