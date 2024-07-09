/**
 * WordPress dependencies
 */
import {
	createBlock
} from '@wordpress/blocks';

const transforms = {
	from: [
		{
			type: 'block',
			isMultiBlock: true,
			blocks: ['core/image'],
			transform: (attributes) => {
				const validImages = attributes.filter(({ url }) => url);
				return createBlock('occ/rather-simple-background-slider', {
					images: validImages.map(
						({ id, url, alt, caption }) => ({
							id,
							url,
							alt,
							caption: caption.text
						})
					),
				});
			},
		},
	],
	"to": [
		{
			type: 'block',
			blocks: ['core/image'],
			transform: (attributes) => {
				if (attributes.images.length > 0) {
					return attributes.images.map(({ id, url, alt, caption }) =>
						createBlock('core/image', {
							id,
							url,
							alt,
							caption,
							sizeSlug: 'full'
						})
					);
				}
			},
		}
	]
}

export default transforms;