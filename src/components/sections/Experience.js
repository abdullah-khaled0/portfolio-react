import { Container } from "react-bootstrap";
import { experienceData } from "../../data/experienceData";

export const Experience = () => {
  return (
    <section className="py-5" id="experience" style={{ backgroundColor: "#02040a", position: "relative" }}>
      <div className="glow-overlay" style={{ top: '40%', left: '5%' }}></div>
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Professional Milestones</h2>
          <p className="section-subtitle">
            A history of designing production software, training pipelines, and orchestrating intelligent agents in professional environments.
          </p>
        </div>

        <div className="experience-timeline">
          {experienceData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">{item.role}</h3>
                    <span className="timeline-company">{item.company}</span>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-duration">{item.duration}</span>
                    <div className="timeline-location">{item.location}</div>
                  </div>
                </div>
                <ul className="timeline-highlights">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
