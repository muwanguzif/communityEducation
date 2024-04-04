import React from "react";
import partnershipImage from '../images/partnership.jpg';
import communityImage from '../images/community_library.jpg';
import respCommunityImage from '../images/resp_community.jpg';
import '../App.css';

const Features = () => {
    return (
        <div className="features">
            <div className="feature">
                <img src={partnershipImage} alt="Educational Partnership"/>
                <div className="feature-text">
                    <p>Develop educational partnerships between schools and public and private service providers, business and industry, and civic and social service organizations.</p>
                </div>          
            </div>
            <div className="feature reverse">
                <img src={communityImage} alt="Community Service Centers"/>
                <div className="feature-text">
                    <p>Use public education facilities as community service centers for meeting the educational, social, health, cultural, and recreational needs of all ages and sectors of the community.</p>
                </div>
            </div>
            <div className="feature">
                <img src={respCommunityImage} alt="Collective Action"/>
                <div className="feature-text">
                    <p>Provide a responsive, community-based system for collective action by all educational and community agencies to address community issues.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;
