<?php

$block_props = get_block_wrapper_attributes();

$params = array(
	'delay' => $attributes['delay'],
);

?>
<figure <?php echo wp_kses_data( $block_props ); ?> data-settings="<?php echo esc_attr( wp_json_encode( $params ) ); ?>">
	<div class="swiper">
		<div class="swiper-wrapper">
			<?php foreach ( $attributes['images'] as $image ) : ?>
				<div class="swiper-slide">
					<?php
					echo wp_get_attachment_image(
						$image['id'],
						'full',
						null,
						array(
							'sizes' => 'calc(100vh * 1.78)',
						)
					);
					?>
				</div>
			<?php endforeach; ?>
		</div>
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>
	</div>
</figure>