import { useState } from "react";
import { Container } from "react-bootstrap";
import { ProjectCard } from "../ui/ProjectCard";
import { DS_projects, DA_projects, AI_SE_projects } from "../../data/projectsData";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("ai_se");

  const getProjectsByTab = () => {
    switch (activeTab) {
      case "ds":
        return DS_projects;
      case "da":
        return DA_projects;
      case "ai_se":
      default:
        return AI_SE_projects;
    }
  };

  return (
    <section className="py-5" id="projects" style={{ backgroundColor: "#02040a" }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-subtitle">
            An curated repository of my engineering and analytical work, categorized by domains of expertise.
          </p>
          
          <div className="projects-tabs-nav">
            <button
              onClick={() => setActiveTab("ai_se")}
              className={`projects-tab-btn ${activeTab === "ai_se" ? "active" : ""}`}
            >
              AI Software Engineer
            </button>
            <button
              onClick={() => setActiveTab("ds")}
              className={`projects-tab-btn ${activeTab === "ds" ? "active" : ""}`}
            >
              Data Scientist
            </button>
            <button
              onClick={() => setActiveTab("da")}
              className={`projects-tab-btn ${activeTab === "da" ? "active" : ""}`}
            >
              Data Analyst
            </button>
          </div>
        </div>

        <div className="projects-grid">
          {getProjectsByTab().map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              linkUrl={project.linkUrl}
              tags={project.tags}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
