import {Icon} from '@iconify/react';
import React, {useState, useRef} from 'react';
import SectionHeading from './SectionHeading';
import Slider from 'react-slick';
import Modal from './Modal';

export default function Projects({data}) {
    const [modal, setModal] = useState(false);
    const [modalType, setModalType] = useState('image');
    const [modalData, setModalData] = useState({});
    const {sectionHeading, allProjects} = data;
    const sliderRef = useRef(null);

    const handelProjectDetails = (item, itemType) => {
        setModalData(item);
        setModalType(itemType);
        setModal(!modal);
    };

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <>
            <section className="project-section section gray-bg" id="project">
                <div className="container">
                    <SectionHeading
                        miniTitle={sectionHeading.miniTitle}
                        title={sectionHeading.title}
                    />
                    <div
                        className="full-width"
                        data-aos="fade"
                        data-aos-duration="1200"
                        data-aos-delay="400"
                    >
                        <div className="slider-container" style={{position: 'relative', padding: '0 40px'}}>
                            <Slider ref={sliderRef} {...settings} className="slider-gap-24">
                                {allProjects?.map((item, index) => (
                                    <div key={index} style={{padding: '0 10px'}}>
                                        <div className="project-box"
                                             style={{
                                                 width: '100%',
                                                 height: '500px', // Increased from 500px
                                                 boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                                 borderRadius: '10px', // Added to match the image
                                                 overflow: 'hidden' // Ensure content doesn't overflow
                                             }}>
                                            <div
                                                className="project-media"
                                                style={{
                                                    height: '90%',
                                                    position: 'relative',
                                                    cursor: 'pointer'
                                                }} // Increased from 80%
                                                onClick={() => handelProjectDetails(item, 'details')}
                                            >
                                                <img src={item.thumbUrl} alt="Thumb"
                                                     style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                                            </div>
                                            <div className="project-body" style={{
                                                height: '10%', // Reduced from 20%
                                                padding: '10px 15px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center' // Center the content vertically
                                            }}>
                                                <div className="text">
                                                    <h5 style={{
                                                        margin: '0',
                                                        fontSize: '16px',
                                                        fontWeight: 'bold'
                                                    }}>{item.title}</h5>
                                                    <span style={{fontSize: '14px'}}>{item.subTitle}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <button
                                onClick={goToPrev}
                                style={{
                                    position: 'absolute',
                                    left: '0',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    zIndex: 1,
                                    background: 'rgba(0,0,0,0.5)',
                                    color: 'white',
                                    border: 'none',
                                    padding: '10px',
                                    cursor: 'pointer'
                                }}
                            >
                                <Icon icon="bi:chevron-left" width="24" height="24"/>
                            </button>
                            <button
                                onClick={goToNext}
                                style={{
                                    position: 'absolute',
                                    right: '0',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    zIndex: 1,
                                    background: 'rgba(0,0,0,0.5)',
                                    color: 'white',
                                    border: 'none',
                                    padding: '10px',
                                    cursor: 'pointer'
                                }}
                            >
                                <Icon icon="bi:chevron-right" width="24" height="24"/>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {modal && (
                <div className="mfp-wrap">
                    <div className="mfp-container">
                        <div className="mfp-bg" onClick={() => setModal(!modal)}></div>
                        <div className="mfp-content">
                            <button
                                type="button"
                                className="mfp-close"
                                onClick={() => setModal(!modal)}
                            >
                                ×
                            </button>
                            {modalType === 'image' ? (
                                <img src={modalData.thumbUrl} alt="Thumbnail"/>
                            ) : (
                                <Modal modalData={modalData}/>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}