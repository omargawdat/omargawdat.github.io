import React from 'react';
import parser from 'html-react-parser';

export default function Modal({ modalData }) {
    const { thumbUrl, details } = modalData;
    const { title, description, type, langages, platform, country, url } = details;

    return (
        <div className="px-modal">
            <div className="single-project-box">
                <div className="row align-items-start">
                    <div className="col-lg-7">
                        <div className="image-wrapper">
                            <img src={thumbUrl} alt={title || "Project thumbnail"} />
                        </div>
                    </div>
                    <div className="col-lg-5 pt-4 pt-lg-0">
                        {title && <h4>{parser(title)}</h4>}
                        {description && <p>{parser(description)}</p>}
                        <div className="about-content">
                            <ul>
                                {[
                                    { label: 'Type', value: type },
                                    { label: 'Languages', value: langages },
                                    { label: 'Platform', value: platform },
                                    { label: 'Country', value: country },
                                    { label: 'Live URL', value: url },
                                ].map(({ label, value }) => value && (
                                    <li key={label} className="d-flex">
                                        <span className="col-4 col-lg-3">{label}:</span>
                                        <span>{value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}