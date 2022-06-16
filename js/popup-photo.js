const modal = document.querySelector(".popup");
const trigger = document.querySelector(".photo__btn--open");
const closeButton = document.querySelector(".popup__btn--close");

function toggleModal() {
	modal.classList.toggle("popup--show");
}

function windowOnClick(event) {
	if (event.target === modal) {
		toggleModal();
	}
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


// slider
const swiperPopup = new Swiper('.popup__swiper', {
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

