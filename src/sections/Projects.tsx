import React, { useState } from "react";
import "./Projects.css";
import { portfolioData } from "../data/portfolio";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";

interface ProjectCard {
  id: number;
  title: string;
  description: string;
  detail: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image?: string;
  images?: string[];
  browserUrl: string;
  note?: string;
}

const Projects: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

  const projects: ProjectCard[] = portfolioData.projects;

  const handleImageChange = (projectId: number, direction: "prev" | "next") => {
    const project = projects.find((item) => item.id === projectId);
    if (!project || !project.images) return;

    const currentIndex = currentImageIndex[projectId] || 0;
    const totalImages = project.images.length;

    if (direction === "next") {
      setCurrentImageIndex({
        ...currentImageIndex,
        [projectId]: (currentIndex + 1) % totalImages,
      });
    } else {
      setCurrentImageIndex({
        ...currentImageIndex,
        [projectId]: currentIndex === 0 ? totalImages - 1 : currentIndex - 1,
      });
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-header-container">
        <div className="projects-header">
          <h2 className="section-number">02.</h2>
          <h3 className="section-title">Some Things I've Built</h3>
        </div>
      </div>

      <div className="projects-list">
        <ScrollStack className="projects-stack" itemDistance={88} itemScale={0.015} stackPosition="14%" baseScale={0.96} rotationAmount={0.35} blurAmount={0}>
        {projects.map((project, index) => {
          const currentIndex = project.images ? currentImageIndex[project.id] || 0 : 0;
          const displayImage = project.image || (project.images ? project.images[currentIndex] : null);

          return (
            <ScrollStackItem key={project.id} itemClassName="project-stack-card">
            <div className={`project-item ${index % 2 === 1 ? "project-item-reverse" : ""}`}>
              <div className="project-content">
                <div className="project-label">Featured Project</div>
                <h4 className="project-title">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-title-link">
                      {project.title}
                    </a>
                  ) : (
                    <span className="project-title-link">{project.title}</span>
                  )}
                </h4>
                <div className="project-description-wrapper">
                  <p className="project-description">{project.description}</p>
                  <p className="project-description">{project.detail}</p>
                  {project.note && <p className="project-description">{project.note}</p>}
                </div>
                <ul className="project-tech-list">
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link" className="project-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="External Link" className="project-link">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <div className="project-image-wrapper">
                <div className={`project-image ${displayImage ? "has-image" : ""}`}>
                  {displayImage ? (
                    <div className="monitor-frame">
                      <div className="monitor-screen">
                        <div className="browser-window">
                          <div className="browser-header">
                            <div className="browser-dots">
                              <span className="browser-dot dot-red"></span>
                              <span className="browser-dot dot-yellow"></span>
                              <span className="browser-dot dot-green"></span>
                            </div>
                            <div className="browser-url">{project.browserUrl}</div>
                          </div>
                          <div className="browser-content">
                            {project.images && project.images.length > 1 ? (
                              <>
                                <div className="image-carousel">
                                  <img src={displayImage} alt={`${project.title} - Screenshot ${currentIndex + 1}`} className="project-screenshot" />
                                  <button className="carousel-btn carousel-prev" onClick={(e) => { e.stopPropagation(); handleImageChange(project.id, "prev"); }} aria-label="Previous image">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M10 12l-4-4 4-4" />
                                    </svg>
                                  </button>
                                  <button className="carousel-btn carousel-next" onClick={(e) => { e.stopPropagation(); handleImageChange(project.id, "next"); }} aria-label="Next image">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M6 12l4-4-4-4" />
                                    </svg>
                                  </button>
                                </div>
                                <div className="carousel-indicators">
                                  {project.images.map((_, idx) => (
                                    <button key={idx} className={`carousel-indicator ${idx === currentIndex ? "active" : ""}`} onClick={(e) => { e.stopPropagation(); setCurrentImageIndex({ ...currentImageIndex, [project.id]: idx }); }} aria-label={`Go to image ${idx + 1}`} />
                                  ))}
                                </div>
                              </>
                            ) : (
                              <img src={displayImage} alt={project.title} className="project-screenshot" />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="monitor-base"></div>
                    </div>
                  ) : (
                    <div className="project-image-placeholder">
                      <span>[ ]</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            </ScrollStackItem>
          );
        })}
        </ScrollStack>
      </div>
    </section>
  );
};

export default Projects;
