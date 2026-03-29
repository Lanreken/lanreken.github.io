import React from "react";
import "./Tech.css";
import { portfolioData } from "../data/portfolio";
import MagicBento from "../components/MagicBento";

const Tech: React.FC = () => {
  const bentoCards = [
    {
      label: "API Design",
      title: "REST APIs that stay readable as products grow",
      description: "I build route structures, validation flows, and backend logic that remain maintainable when teams add more features.",
    },
    {
      label: "Auth",
      title: "JWT authentication and role-based access control",
      description: "Secure login, guarded endpoints, authorization rules, and account workflows are some of the backend pieces I enjoy building most.",
    },
    {
      label: "Payments",
      title: "Transaction and payout flows with real integrations",
      description: "My work includes payment-oriented logic, webhook handling, and milestone-based disbursement systems for fundraising and commerce products.",
    },
    {
      label: "Docs",
      title: "Swagger docs that help frontend teams move faster",
      description: "I care about API clarity because good documentation saves time, reduces confusion, and improves collaboration across the whole team.",
    },
    {
      label: "Delivery",
      title: "Team workflow, GitHub coordination, and clean reviews",
      description: "Beyond code, I have led small backend teams, supported sprint delivery, and helped keep repo workflow and architecture clean.",
    },
    {
      label: "Growth",
      title: "Always improving production-ready backend habits",
      description: "I am actively growing in architecture, debugging, error handling, and deployment thinking so I can contribute well in real engineering teams.",
    },
  ];

  return (
    <section id="tech" className="tech">
      <div className="tech-container">
        <div className="tech-header">
          <h2 className="section-number">04.</h2>
          <h3 className="section-title">Technologies I Work With</h3>
        </div>

        <div className="tech-list">
          {portfolioData.tech.map((tech, index) => (
            <div key={index} className="tech-item">
              <span className="tech-icon">{tech.icon}</span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="tech-bento-block">
          <div className="tech-bento-copy">
            <p className="tech-kicker">What I bring to a backend team</p>
            <h4 className="tech-bento-title">Practical backend strengths, not just tool names.</h4>
            <p className="tech-bento-text">
              This section gives a better feel for how I work: secure API thinking, teamwork, documentation, and delivery habits that support real products.
            </p>
          </div>

          <MagicBento
            cards={bentoCards}
            textAutoHide={true}
            enableStars
            enableSpotlight
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect
            spotlightRadius={400}
            particleCount={10}
            glowColor="37, 99, 235"
            disableAnimations={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Tech;
