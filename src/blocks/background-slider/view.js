import { Swiper } from 'swiper';
import { A11y, Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', function (e) {

	document.querySelectorAll('.wp-block-occ-rather-simple-background-slider').forEach(function (item) {

		var settings = JSON.parse(item.dataset.settings);

		var main = item.querySelector('.swiper');
		var mainSwiper = new Swiper(main, {
			modules: [A11y, Autoplay, EffectFade, Navigation],
			autoplay: {
				delay: settings.delay * 1000,
				disableOnInteraction: false
			},
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			speed: 600,
			loop: true,
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next'
			},
			resizeObserver: false,
			a11y: {
				enabled: true
			}
		});

	});

});