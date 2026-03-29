import React from "react";
import "./Hero.css";
import { portfolioData } from "../data/portfolio";
import TextType from "../components/TextType";
import RotatingText from "../components/RotatingText";

const Hero: React.FC = () => {
  const heroStats = [
    { label: "Core Focus", value: portfolioData.profile.role },
    { label: "Location", value: portfolioData.profile.location },
    { label: "Projects", value: `${portfolioData.projects.length}+ featured builds` },
    { label: "Strength", value: "APIs, Auth, Integrations" },
  ];

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = portfolioData.profile.resumeFile;
    link.download = "Lanre-Adelugba-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-name">{portfolioData.profile.fullName}.</h1>
          <h2 className="hero-title">
            <TextType
              text={portfolioData.profile.heroTitle}
              typingSpeed={42}
              pauseDuration={3200}
              deletingSpeed={24}
              loop={false}
              showCursor
              cursorCharacter="_"
              hideCursorWhileTyping
            />
          </h2>
          <div className="hero-rotating-row">
            <span className="hero-rotating-prefix">I focus on</span>
            <RotatingText
              texts={["REST APIs", "Authentication", "Backend Architecture", "Product Integrations"]}
              mainClassName="hero-rotating-text"
              splitLevelClassName="hero-rotating-split"
              elementLevelClassName="hero-rotating-element"
              staggerFrom="last"
              staggerDuration={0.02}
              rotationInterval={2400}
            />
          </div>
          <p className="hero-description">{portfolioData.profile.heroDescription}</p>
          <div className="hero-highlights" aria-label="Profile highlights">
            <span className="hero-pill">{portfolioData.profile.role}</span>
            <span className="hero-pill">{portfolioData.profile.location}</span>
            <span className="hero-pill">{portfolioData.profile.availability}</span>
          </div>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              Check out my work!
            </a>
            <button onClick={handleResumeDownload} className="btn btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Resume
            </button>
          </div>
          <div className="hero-stats">
            {heroStats.map((item) => (
              <div key={item.label} className="hero-stat-card">
                <span className="hero-stat-label">{item.label}</span>
                <strong className="hero-stat-value">{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
