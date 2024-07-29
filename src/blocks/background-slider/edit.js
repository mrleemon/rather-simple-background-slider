/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
    ToolbarGroup,
    ToolbarButton,
    RangeControl,
    PanelBody,
} from '@wordpress/components';
import {
    InspectorControls,
    BlockControls,
    MediaUploadCheck,
    MediaUpload,
    MediaPlaceholder,
    useBlockProps,
} from '@wordpress/block-editor';
import {
    useState,
    useEffect,
} from '@wordpress/element';

/**
 * Internal dependencies
 */
const Edit = (props) => {

    const blockProps = useBlockProps();
    const {
        attributes: { images, delay },
        setAttributes,
    } = props;

    const [currentIndex, setCurrentIndex] = useState(0);

    const displayImages = (images) => {
        return (
            images.map((image, index) => {
                return (
                    <figure className="wp-block-occ-rather-simple-background-slider__item" key={index}>
                        <img src={image.url} alt={image.alt} key={image.id} className={`wp-block-occ-rather-simple-background-slider__slide ${index === currentIndex ? 'active' : ''}`} />
                    </figure>
                )
            })
        )
    };

    function setImages(value) {
        const imageDetails = value.map(image => (
            {
                id: image.id,
                url: image.url,
                alt: image.alt,
                caption: image.caption
            }
        ));
        setAttributes({ images: imageDetails })
    }

    const setDelay = (value) => {
        setAttributes({ delay: value })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, delay * 1000);

        return () => clearInterval(interval);
    }, [images.length, delay]);

    return (
        <>
            <InspectorControls>
                <PanelBody
                    title={__('Settings', 'rather-simple-background-slider')}
                >
                    <RangeControl
                        label={__('Delay', 'rather-simple-background-slider')}
                        min="1"
                        max="30"
                        onChange={setDelay}
                        value={delay}
                        help={__('Set the delay between images in seconds.', 'rather-simple-background-slider')}
                    />
                </PanelBody>
            </InspectorControls>
            <BlockControls>
                {images.length > 0 && (
                    <ToolbarGroup>
                        <MediaUploadCheck>
                            <MediaUpload
                                allowedTypes={['image']}
                                multiple={true}
                                gallery={true}
                                value={images.map((image) => image.id)}
                                onSelect={setImages}
                                render={({ open }) => (
                                    <ToolbarButton onClick={open}>
                                        {__('Edit images', 'rather-simple-background-slider')}
                                    </ToolbarButton>)}
                            />
                        </MediaUploadCheck>
                    </ToolbarGroup>
                )}
            </BlockControls>
            <MediaUploadCheck>
                {images.length > 0 ?
                    <figure {...blockProps}>
                        <div className="wp-block-occ-rather-simple-background-slider__items">
                            {
                                displayImages(images)
                            }
                        </div>
                    </figure>
                    :
                    <div {...blockProps}>
                        <MediaPlaceholder
                            accept="image/*"
                            allowedTypes={['image']}
                            onSelect={setImages}
                            multiple={true}
                            gallery={true}
                            addToGallery={true}
                            handleUpload={true}
                            labels={
                                { title: __('Rather Simple Background Slider', 'rather-simple-background-slider') }
                            }
                        />
                    </div>
                }
            </MediaUploadCheck>
        </>
    );

}

export default Edit;
