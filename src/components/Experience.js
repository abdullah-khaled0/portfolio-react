import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Experience = () => {
  return (
    <section className="experience" id="experience" style={{ padding: "80px 0", position: "relative", backgroundColor: "#000" }}>
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 style={{ fontSize: "45px", fontWeight: "700", textAlign: "center", color: "#fff", marginBottom: "30px" }}>
                    Experience
                  </h2>
                  <div className="experience-bx" style={{ background: "#151515", borderRadius: "20px", padding: "40px", color: "#fff" }}>
                    <h3 style={{ fontSize: "30px", fontWeight: "700", marginBottom: "10px" }}>
                      Software Engineer - Self-employed
                    </h3>
                    <p style={{ color: "#B8B8B8", fontSize: "18px", marginBottom: "10px" }}>
                      <strong>Duration:</strong> Nov 2021 - Dec 2022 (1 year 2 months)
                    </p>
                    <p style={{ color: "#B8B8B8", fontSize: "18px", marginBottom: "10px" }}>
                      <strong>Location:</strong> Egypt
                    </p>
                    <h4 style={{ fontSize: "24px", fontWeight: "600", margin: "20px 0 15px" }}>
                      Key Projects:
                    </h4>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px", color: "#B8B8B8", fontSize: "18px", lineHeight: "1.5em" }}>
                      <li><strong>FCAI App:</strong> Designed to assist classmates with academic materials, streamlining access to resources.</li>
                      <li><strong>Tasbeeh App:</strong> Developed a digital tool for tasbeeh, enhancing users' spiritual practices.</li>
                      <li><strong>Hoozgram:</strong> Built an app for mood tracking, promoting emotional awareness.</li>
                      <li><strong>3D Game:</strong> Created a 3D game using Unity Engine, offering engaging gameplay experiences.</li>
                      <li><strong>AR App:</strong> Developed an augmented reality application, delivering immersive experiences.</li>
                      <li><strong>Food Recipes App:</strong> Released a user-friendly app featuring a variety of food recipes.</li>
                      <li><strong>Website Development:</strong> Built dynamic websites using various technologies, showcasing a full-stack development skill set.</li>
                    </ul>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};