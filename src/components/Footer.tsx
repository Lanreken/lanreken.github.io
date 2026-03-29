import React from "react";
import "./Footer.css";
import { portfolioData } from "../data/portfolio";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          {portfolioData.socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label={social.name}
            >
              {social.name}
            </a>
          ))}
        </div>
        <div className="footer-text">
          <p>Designed & Built by {portfolioData.profile.fullName}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
