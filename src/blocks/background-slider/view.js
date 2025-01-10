import { Swiper } from 'swiper';
import { Autoplay, Navigation, EffectFade, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

document.addEventListener('DOMContentLoaded', function (e) {

	document.querySelectorAll('.wp-block-occ-rather-simple-background-slider').forEach(function (item) {

		var settings = JSON.parse(item.dataset.settings);
		console.log(settings);

		var main = item.querySelector('.swiper');
		var mainSwiper = new Swiper(main, {
			modules: [Autoplay, Navigation, EffectFade, A11y],
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