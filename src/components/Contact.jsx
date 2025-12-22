import React from 'react';
import SocialBtns from './SocialBtns';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

export default function Contact({ data, socialData }) {
  const { sectionHeading, contactInfo } = data;
  return (
    <section id="contactus" className="section contactus-section">
      <div className="container">
        <div className="contactus-box rounded oveflow-hidden gray-bg">
          <div className="row g-0 p-4 p-lg-5 pb-0">
            <div className="col-12">
              <div
                className="contactus-title"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h5>{sectionHeading.title}</h5>
                <p className="m-0">{sectionHeading.subTitle}</p>
              </div>
            </div>
          </div>
          <div className="row g-0 contactus-form p-4 p-lg-5 align-items-start">
            <div className="col-lg-4 pe-lg-5 mb-4 mb-lg-0">
              <ContactInfo contactInfoData={contactInfo} />
              <SocialBtns socialBtns={socialData} />
            </div>
            <div className="col-lg-8">
              <div className="contact-form">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
