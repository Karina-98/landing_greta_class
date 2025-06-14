const body = document.querySelector('body');

const swiper = new Swiper('.swiper', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.learningSliderNext',
		prevEl: '.learningSliderPrev',
	},

	pagination: {
		el: '.learningSliderPrevPag',
		clickable: true,
	},
	breakpoints: {
		640: {
			slidesPerView: 1,
		},

		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},

		1024: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
	},
});