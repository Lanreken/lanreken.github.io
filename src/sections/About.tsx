import React, { useState } from "react";
import "./About.css";
import { portfolioData } from "../data/portfolio";

const About: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="about" className="about">
      <div className="about-header-container">
        <div className="about-header">
          <h2 className="section-number">01.</h2>
          <h3 className="section-title">About Me</h3>
        </div>
      </div>

      <div className="about-content">
        <div className="about-text">
          <div className="about-description">
            <p>{portfolioData.profile.aboutIntro}</p>
            <p>{portfolioData.profile.aboutBody}</p>
            <p>{portfolioData.profile.aboutGoal}</p>
            <p>
              <span className="highlight">Education:</span> {portfolioData.profile.education}
            </p>
            <p>
              <span className="highlight">Selected Certifications:</span>{" "}
              {portfolioData.certifications.slice(0, 4).join(", ")}.
            </p>
          </div>
        </div>

        <div className="about-image">
          <div className="image-wrapper">
            <div className="image-border"></div>
            <div className="image-container">
              <img
                src={portfolioData.profile.image}
                alt={portfolioData.profile.fullName}
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="about-container">
        <div className="experience-section">
          <h4 className="experience-title">Where I've Worked</h4>
          <div className="experience-timeline">
            {portfolioData.experience.map((exp, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div key={index} className={`experience-item ${isExpanded ? "expanded" : ""}`}>
                  <div className="experience-header" onClick={() => toggleExpanded(index)}>
                    <div className="experience-role">
                      <span className="experience-company">{exp.company}</span>
                      <span className="experience-position">{exp.role}</span>
                    </div>
                    <div className="experience-header-right">
                      <div className="experience-meta">
                        <span className="experience-location">{exp.location}</span>
                        <span className="experience-period">{exp.period}</span>
                      </div>
                      <div className={`expand-icon ${isExpanded ? "expanded" : ""}`}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 12l4-4-4-4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className={`experience-content ${isExpanded ? "expanded" : ""}`}>
                    <ul className="experience-achievements">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
