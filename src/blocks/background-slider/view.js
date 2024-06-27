import { Swiper } from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

document.addEventListener('DOMContentLoaded', function (e) {

	document.querySelectorAll('.wp-block-occ-rather-simple-background-slider').forEach(function (item) {

		var main = item.querySelector('.slider');
		var swiper = new Swiper(main, {
			modules: [Autoplay, EffectFade],
			loop: true,
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			centeredSlides: false,
			autoHeight: false,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
				pauseOnMouseEnter: false,
			}
		});

	});

});