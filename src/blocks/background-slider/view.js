import 'vegas';
import 'vegas/dist/vegas.css';

(function ($) {

	$(function () {

		$('.wp-block-occ-rather-simple-background-slider').each(function () {
			var images = $(this).data('images');

			// Convert array of strings to array of objects
			let slides = images.map(image => {
				return { src: image.url };
			});

			// Initialize Vegas plugin with converted slides array
			$('body').vegas({
				slides: slides,
				delay: 15000,
				timer: false
			});

		});


	});

})(jQuery);