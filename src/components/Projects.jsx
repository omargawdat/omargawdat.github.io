import { Icon } from '@iconify/react';
import React, { useState, useRef } from 'react';
import SectionHeading from './SectionHeading';
import Slider from 'react-slick';
import Modal from './Modal';

const SliderButton = ({ direction, onClick }) => (
    <button
        onClick={onClick}
        style={{
            position: 'absolute',
            [direction]: 0,
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
        <Icon icon={`bi:chevron-${direction}`} width="24" height="24" />
    </button>
);

const ProjectBox = ({ item, onProjectClick }) => (
    <div className="project-box" style={styles.projectBox}>
        <div
            className="project-media"
            style={styles.projectMedia}
            onClick={() => onProjectClick(item)}
        >
            <img src={item.thumbUrl} alt="Thumb" style={styles.projectImage} />
        </div>
        <div className="project-body" style={styles.projectBody}>
            <h5 style={styles.projectTitle}>{item.title}</h5>
        </div>
    </div>
);

const styles = {
    projectBox: {
        width: '100%',
        height: '500px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '10px',
        overflow: 'hidden'
    },
    projectMedia: {
        height: '92%',
        position: 'relative',
        cursor: 'pointer'
    },
    projectImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    projectBody: {
        height: '8%',
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    projectTitle: {
        margin: 0,
        fontSize: '18px',
        fontWeight: 'bold'
    }
};

export default function Projects({ data }) {
    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState({});
    const { sectionHeading, allProjects } = data;
    const sliderRef = useRef(null);

    const handleProjectDetails = (item) => {
        setModalData(item);
        setModal(true);
    };

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <>
            <section className="project-section section gray-bg" id="project">
                <div className="container">
                    <SectionHeading
                        miniTitle={sectionHeading.miniTitle}
                        title={sectionHeading.title}
                    />
                    <div className="full-width" data-aos="fade" data-aos-duration="1200" data-aos-delay="400">
                        <div className="slider-container" style={{ position: 'relative', padding: '0 40px' }}>
                            <Slider ref={sliderRef} {...settings} className="slider-gap-24">
                                {allProjects?.map((item, index) => (
                                    <div key={index} style={{ padding: '0 10px' }}>
                                        <ProjectBox item={item} onProjectClick={handleProjectDetails} />
                                    </div>
                                ))}
                            </Slider>
                            <SliderButton direction="left" onClick={() => sliderRef.current.slickPrev()} />
                            <SliderButton direction="right" onClick={() => sliderRef.current.slickNext()} />
                        </div>
                    </div>
                </div>
            </section>
            {modal && (
                <div className="mfp-wrap" style={styles.modalWrapper}>
                    <div className="mfp-container" style={styles.modalContainer}>
                        <div className="mfp-bg" onClick={() => setModal(false)} style={styles.modalBackground}></div>
                        <div className="mfp-content" style={styles.modalContent}>
                            <button type="button" className="mfp-close" onClick={() => setModal(false)} style={styles.closeButton}>
                                ×
                            </button>
                            <Modal modalData={modalData} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}