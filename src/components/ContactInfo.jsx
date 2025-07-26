import React from 'react';

export default function ContactInfo({ contactInfoData }) {
  return (
    <div className="contact-info">
      {contactInfoData.map((item, index) => (
        <div
          className="contact-info-in"
          key={index}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={index * 100}
        >
          <label>{item.title}</label>
          {item.email && (
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=omargawdat0@gmail.com&su=Professional%20Inquiry%20-%20Omar%20Gawdat"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.email}
            </a>
          )}
          {item.tel && <a href={`tel:${item.tel}`}>{item.tel}</a>}
        </div>
      ))}
    </div>
  );
}
