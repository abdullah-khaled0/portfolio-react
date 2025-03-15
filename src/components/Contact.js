import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us"
                />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Connect With Me:</h2>
                    <div className="social-icon" style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
                      <a href="https://linkedin.com/in/abdullah-khaled-0608a9236" target="_blank" rel="noopener noreferrer">
                        <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="LinkedIn" height="40" width="40" />
                      </a>
                      <a href="https://github.com/abdullah-khaled0" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" height="40" width="40" />
                      </a>
                      <a href="https://kaggle.com/abdullah7aled" target="_blank" rel="noopener noreferrer">
                        <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/kaggle.svg" alt="Kaggle" height="40" width="40" />
                      </a>
                      <a href="https://www.hackerrank.com/abdullah_7aled" target="_blank" rel="noopener noreferrer">
                        <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="HackerRank" height="40" width="40" />
                      </a>
                      <a href="https://share.streamlit.io/user/abdullah-khaled0" target="_blank" rel="noopener noreferrer">
                        <img src="https://seeklogo.com/images/S/streamlit-logo-1A3B208AE4-seeklogo.com.png" alt="Streamlit" height="40" width="40" />
                      </a>
                      <a href="https://wa.me/+201557504902" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" height="40" width="40" />
                      </a>
                      {/* New Links */}
                      <a href="https://leetcode.com/u/3bdullah_7aled/" target="_blank" rel="noopener noreferrer">
                        <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" alt="LeetCode - Abdullah Khaled" height="40" width="40" />
                      </a>
                      <a href="https://learn.microsoft.com/en-us/users/abdullahkhaled-4050/" target="_blank" rel="noopener noreferrer">
                        <img src="https://learn.microsoft.com/en-us/media/logos/logo-ms-social.png" alt="Microsoft Learn - Abdullah Khaled" height="40" width="40" />
                      </a>
                    </div>
              <p style={{ textAlign: "center", marginTop: "20px" }}>
  <strong style={{ fontSize: "18px", color: "#dedede" }}>My Profiles on Learning Platforms</strong>
  <br />
  <a
    href="https://www.coursera.org/user/a417b4d4afc4a0d67abb5bacc39083a5"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      margin: "10px",
      padding: "8px 16px",
      fontSize: "16px",
      textDecoration: "none",
      color: "#fff",
      backgroundColor: "#2A73CC",
      borderRadius: "5px",
      fontWeight: "bold",
      transition: "background-color 0.3s ease",
    }}
    onMouseEnter={(e) => (e.target.style.backgroundColor = "#1D4F8C")}
    onMouseLeave={(e) => (e.target.style.backgroundColor = "#2A73CC")}
  >
    Coursera
  </a>
  <a
    href="https://learn.365datascience.com/profile/abdullah-khaled-4/"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      margin: "10px",
      padding: "8px 16px",
      fontSize: "16px",
      textDecoration: "none",
      color: "#fff",
      backgroundColor: "#FF6C00",
      borderRadius: "5px",
      fontWeight: "bold",
      transition: "background-color 0.3s ease",
    }}
    onMouseEnter={(e) => (e.target.style.backgroundColor = "#CC5600")}
    onMouseLeave={(e) => (e.target.style.backgroundColor = "#FF6C00")}
  >
    365DataScience
  </a>
  <a
    href="https://www.datacamp.com/portfolio/3bdullah"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      margin: "10px",
      padding: "8px 16px",
      fontSize: "16px",
      textDecoration: "none",
      color: "#fff",
      backgroundColor: "#03B58C",
      borderRadius: "5px",
      fontWeight: "bold",
      transition: "background-color 0.3s ease",
    }}
    onMouseEnter={(e) => (e.target.style.backgroundColor = "#02916F")}
    onMouseLeave={(e) => (e.target.style.backgroundColor = "#03B58C")}
  >
    DataCamp
  </a>
</p>

            </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};