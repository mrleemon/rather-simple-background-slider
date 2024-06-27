/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
    ToolbarGroup,
    ToolbarButton,
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
import { useEffect } from '@wordpress/element';
import { useRefEffect } from '@wordpress/compose';
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
const Edit = (props) => {

    const blockProps = useBlockProps();
    const {
        attributes: { images },
        setAttributes,
    } = props;

    const { attachments } = useSelect(select => {
        const query = {
            include: images.join(','),
            per_page: images.length,
            orderby: 'include'
        };
        return {
            attachments: select('core').getMediaItems(query, { context: 'view' }),
        }
    }, [images]);

    const displayImages = (images) => {
        return (
            images.map((image, index) => {
                return (
                    <div className="carousel-item" key={index}>
                        <figure>
                            <img src={image.source_url} alt={image.alt_text} key={image.id} />
                        </figure>
                    </div>
                )
            })
        )
    };

    function setImages(media) {
        const imageIDs = media.map(image => image.id);
        setAttributes({ images: imageIDs })
    }

    return (
        <>
            <InspectorControls>
                <PanelBody
                    title={__('Settings', 'rather-simple-background-slider')}
                >
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
                                value={images}
                                onSelect={setImages}
                                render={({ open }) => (
                                    <ToolbarButton onClick={open}>
                                        {__('Edit images', 'rather-simple-background-sliders')}
                                    </ToolbarButton>)}
                            />
                        </MediaUploadCheck>
                    </ToolbarGroup>
                )}
            </BlockControls>
            <MediaUploadCheck>
                {attachments && attachments.length > 0 ?
                    <figure {...blockProps}>
                        <div className="carousel-wrapper" ref={ref}>
                            <div className="carousel-frame">
                                <div className="carousel-items">
                                    {
                                        displayImages(attachments)
                                    }
                                </div>
                            </div>
                        </div>
                    </figure>
                    :
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
                }
            </MediaUploadCheck>
        </>
    );

}

export default Edit;
