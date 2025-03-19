<?php
/**
 * All of the parameters passed to the function where this file is being required are accessible in this scope:
 *
 * @param array    $attributes     The array of attributes for this block.
 * @param string   $content        Rendered block output. ie. <InnerBlocks.Content />.
 * @param WP_Block $block          The instance of the WP_Block class that represents the block being rendered.
 *
 * @package rather_simple_background_slider
 */

$params = array(
	'delay' => $attributes['delay'],
);

?>
<figure <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?> data-settings="<?php echo esc_attr( wp_json_encode( $params ) ); ?>">
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
