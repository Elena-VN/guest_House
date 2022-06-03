function reviewsToggleOpen(event) {
	let box = event.target.previousElementSibling;
	box.classList.toggle('reviews__open');
	btnText = event.target;
	if (box.classList.contains('reviews__open')) {
		btnText.innerHTML = 'Скрыть…';
	} else {
		btnText.innerHTML = 'Читать далее…';
	}
}	