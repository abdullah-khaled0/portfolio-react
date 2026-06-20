import { Container } from "react-bootstrap";
import { skillsData } from "../../data/skillsData";
import { SkillCard } from "../ui/SkillCard";

export const Skills = () => {
  return (
    <section className="py-5" id="skills" style={{ position: "relative" }}>
      <div className="glow-overlay" style={{ bottom: '10%', right: '15%' }}></div>
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Core Capability Matrix</h2>
          <p className="section-subtitle">
            An overview of my engineering competencies, orchestrating tools, deep learning frameworks, and analytics stacks to construct modern AI solutions.
          </p>
        </div>
        
        <div className="skills-grid">
          {skillsData.map((skillGroup, index) => (
            <SkillCard
              key={index}
              category={skillGroup.category}
              iconName={skillGroup.iconName}
              color={skillGroup.color}
              items={skillGroup.items}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
