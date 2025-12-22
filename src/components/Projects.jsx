import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';
import SectionHeading from './SectionHeading';

// Extract App Store ID from URL or use directly if it's just an ID
const getAppStoreId = (urlOrId) => {
    if (!urlOrId) return null;
    // If it's just a number, return it
    if (/^\d+$/.test(urlOrId)) return urlOrId;
    // Extract ID from App Store URL (e.g., /id6754637619)
    const match = urlOrId.match(/\/id(\d+)/);
    return match ? match[1] : null;
};

// Fetch app icon from iTunes API
const fetchAppIcon = async (appId) => {
    try {
        const response = await fetch(`https://itunes.apple.com/lookup?id=${appId}`);
        const data = await response.json();
        if (data.results && data.results.length > 0) {
            return data.results[0].artworkUrl512 || data.results[0].artworkUrl100;
        }
    } catch (error) {
        console.error('Failed to fetch app icon:', error);
    }
    return null;
};

const ProjectBox = ({ item, appIcon }) => {
    const hasUrl = item.url && item.url.trim() !== '';

    const handleClick = () => {
        if (hasUrl) {
            window.open(item.url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div
            className="project-box"
            style={{
                ...styles.projectBox,
                cursor: hasUrl ? 'pointer' : 'default'
            }}
            onClick={handleClick}
        >
            {/* App Logo */}
            <div style={styles.logoContainer}>
                {appIcon ? (
                    <img
                        src={appIcon}
                        alt={item.title}
                        style={styles.appLogo}
                    />
                ) : (
                    <div style={styles.placeholderLogo}>
                        <Icon icon={item.icon || 'bi:folder'} width="60" height="60" style={styles.icon} />
                    </div>
                )}
            </div>

            {/* App Info */}
            <h5 style={styles.appName}>{item.title}</h5>
            <p style={styles.appCategory}>{item.subTitle}</p>

            {/* App Store Button */}
            {hasUrl && (
                <div style={styles.storeButton}>
                    <Icon icon="bi:apple" width="16" height="16" />
                    <span>App Store</span>
                    <Icon icon="bi:box-arrow-up-right" width="12" height="12" />
                </div>
            )}
        </div>
    );
};

const styles = {
    projectBox: {
        width: '100%',
        background: 'linear-gradient(145deg, #1a2332 0%, #0d1520 100%)',
        borderRadius: '24px',
        padding: '32px 24px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        border: '1px solid rgba(7, 136, 255, 0.15)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    },
    logoContainer: {
        marginBottom: '20px'
    },
    appLogo: {
        width: '120px',
        height: '120px',
        borderRadius: '28px',
        objectFit: 'cover',
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)'
    },
    placeholderLogo: {
        width: '120px',
        height: '120px',
        borderRadius: '28px',
        background: 'linear-gradient(145deg, #0788ff 0%, #0560c0 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 12px 40px rgba(7, 136, 255, 0.3)'
    },
    icon: {
        color: 'white'
    },
    appName: {
        margin: '0 0 6px 0',
        fontSize: '20px',
        fontWeight: '700',
        color: '#fff'
    },
    appCategory: {
        margin: '0 0 20px 0',
        fontSize: '14px',
        color: 'rgba(255,255,255,0.5)',
        fontWeight: '400'
    },
    storeButton: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '10px 20px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        color: '#fff',
        fontSize: '14px',
        fontWeight: '500',
        transition: 'all 0.2s ease',
        border: '1px solid rgba(255, 255, 255, 0.1)'
    }
};

export default function Projects({ data }) {
    const { sectionHeading, allProjects } = data;
    const [appIcons, setAppIcons] = useState({});

    // Fetch app icons for all projects with App Store IDs
    useEffect(() => {
        const fetchAllIcons = async () => {
            const icons = {};
            for (const project of allProjects || []) {
                const appId = getAppStoreId(project.appStoreId || project.url);
                if (appId) {
                    const iconUrl = await fetchAppIcon(appId);
                    if (iconUrl) {
                        icons[project.title] = iconUrl;
                    }
                }
            }
            setAppIcons(icons);
        };
        fetchAllIcons();
    }, [allProjects]);

    return (
        <section className="project-section section gray-bg" id="project">
            <div className="container">
                <SectionHeading
                    miniTitle={sectionHeading.miniTitle}
                    title={sectionHeading.title}
                />
                <div className="row gy-4" data-aos="fade" data-aos-duration="1200" data-aos-delay="400">
                    {allProjects?.map((item, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <ProjectBox item={item} appIcon={appIcons[item.title]} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
