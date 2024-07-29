import 'vegas';
import 'vegas/dist/vegas.css';

(function ($) {

	$(function () {

		$('.wp-block-occ-rather-simple-background-slider').each(function () {
			var settings = $(this).data('settings');

			// Convert array of strings to array of objects
			let slides = settings.images.map(image => {
				return { src: image.url };
			});

			// Initialize Vegas plugin with converted slides array
			$('body').vegas({
				slides: slides,
				delay: settings.delay * 1000,
				timer: false
			});

		});


	});

})(jQuery);