import React from 'react';
import { Icon } from '@iconify/react';
import SectionHeading from './SectionHeading';

const ExperienceCard = ({ item, index }) => (
  <div
    className="col-12"
  >
    <div style={styles.card}>
      <div style={styles.cardContent}>
        {/* Logo Section */}
        <div style={styles.logoSection}>
          <div style={styles.logoWrapper}>
            <img src={item.logo} alt={item.company} style={styles.logo} />
          </div>
        </div>

        {/* Info Section */}
        <div style={styles.infoSection}>
          <div style={styles.header}>
            <div>
              <h4 style={styles.designation}>{item.designation}</h4>
              <div style={styles.companyRow}>
                <span style={styles.company}>{item.company}</span>
                <span style={styles.location}>
                  <Icon icon="bi:geo-alt" style={{ marginRight: '4px' }} />
                  {item.location}
                </span>
              </div>
            </div>
            <div style={styles.metaRight}>
              <span style={styles.duration}>{item.duration}</span>
              <span style={styles.jobType}>{item.jobType}</span>
            </div>
          </div>

          <p style={styles.description}>{item.companyDescription}</p>

          {/* Website Link */}
          <a
            href={item.website}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.websiteLink}
          >
            <Icon icon="bi:globe" style={{ marginRight: '6px' }} />
            Visit Website
            <Icon icon="bi:arrow-up-right" style={{ marginLeft: '4px', fontSize: '12px' }} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

const styles = {
  card: {
    background: 'linear-gradient(145deg, #1a2332 0%, #0d1520 100%)',
    borderRadius: '16px',
    padding: '24px',
    border: '1px solid rgba(7, 136, 255, 0.2)',
    transition: 'all 0.3s ease',
    marginBottom: '16px'
  },
  cardContent: {
    display: 'flex',
    gap: '24px',
    alignItems: 'flex-start'
  },
  logoSection: {
    flexShrink: 0
  },
  logoWrapper: {
    width: '80px',
    height: '80px',
    borderRadius: '12px',
    overflow: 'hidden',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
  },
  logo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  infoSection: {
    flex: 1,
    minWidth: 0
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '16px',
    flexWrap: 'wrap',
    gap: '12px'
  },
  designation: {
    margin: '0 0 8px 0',
    fontSize: '20px',
    fontWeight: '700',
    color: '#fff'
  },
  companyRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexWrap: 'wrap'
  },
  company: {
    fontSize: '16px',
    color: '#0788ff',
    fontWeight: '600'
  },
  location: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.6)',
    display: 'flex',
    alignItems: 'center'
  },
  metaRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '6px'
  },
  duration: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '500'
  },
  jobType: {
    fontSize: '12px',
    color: '#0788ff',
    background: 'rgba(7, 136, 255, 0.15)',
    padding: '4px 12px',
    borderRadius: '20px',
    fontWeight: '500'
  },
  description: {
    margin: '0 0 16px 0',
    fontSize: '14px',
    color: 'rgba(255,255,255,0.7)',
    lineHeight: '1.6'
  },
  websiteLink: {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '14px',
    color: '#0788ff',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    padding: '8px 16px',
    background: 'rgba(7, 136, 255, 0.1)',
    borderRadius: '8px',
    border: '1px solid rgba(7, 136, 255, 0.3)'
  }
};

export default function Experience({ data }) {
  const { sectionHeading, allExperience } = data;

  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <SectionHeading
          miniTitle={sectionHeading.miniTitle}
          title={sectionHeading.title}
        />
        <div className="row gy-3">
          {allExperience?.map((item, index) => (
            <ExperienceCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
