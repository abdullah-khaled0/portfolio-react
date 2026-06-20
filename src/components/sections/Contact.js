import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
  const contactInfo = [
    {
      title: "Email",
      value: "abdullahkhaled.contact@gmail.com", // Fallback email or generic
      link: "mailto:abdullah.khaled0150@gmail.com",
      icon: <FaEnvelope />,
      color: "var(--color-cyan)"
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/abdullah-khaled",
      link: "https://linkedin.com/in/abdullah-khaled-0608a9236",
      icon: <FaLinkedinIn />,
      color: "#0a66c2"
    },
    {
      title: "GitHub",
      value: "github.com/abdullah-khaled0",
      link: "https://github.com/abdullah-khaled0",
      icon: <FaGithub />,
      color: "#fff"
    },
    {
      title: "WhatsApp",
      value: "+20 155 750 4902",
      link: "https://wa.me/+201557504902",
      icon: <FaWhatsapp />,
      color: "#25d366"
    }
  ];

  const learningPlatforms = [
    {
      name: "Kaggle",
      url: "https://kaggle.com/abdullah7aled",
      img: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/kaggle.svg"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/3bdullah_7aled/",
      img: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg"
    },
    {
      name: "Microsoft",
      url: "https://learn.microsoft.com/en-us/users/abdullahkhaled-4050/",
      img: "https://learn.microsoft.com/en-us/media/logos/logo-ms-social.png"
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/abdullah_7aled",
      img: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg"
    },
    {
      name: "Streamlit",
      url: "https://share.streamlit.io/user/abdullah-khaled0",
      img: "https://tse1.mm.bing.net/th/id/OIP.MpZGG5oPHVFlFDTu4b_1IAHaHa?cb=thfc1falcon2&w=628&h=628&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      name: "Coursera",
      url: "https://www.coursera.org/user/a417b4d4afc4a0d67abb5bacc39083a5",
      img: "https://www.fluentu.com/blog/wp-content/uploads/2018/11/coursera-logo-768x768.png"
    },
    {
      name: "365DataScience",
      url: "https://learn.365datascience.com/profile/abdullah-khaled-4/",
      img: "https://cdn-1.webcatalog.io/catalog/365-data-science/365-data-science-icon.png?v=1714777264364"
    },
    {
      name: "DataCamp",
      url: "https://www.datacamp.com/portfolio/3bdullah",
      img: "https://images.datacamp.com/image/upload/v1657881099/DC_logo_new_56cef25cde.png"
    }
  ];

  return (
    <section className="contact-section" id="connect">
      <div className="glow-overlay" style={{ bottom: '5%', left: '50%' }}></div>
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Connect & Collaborative Hub</h2>
          <p className="section-subtitle">
            Let's discuss automated pipeline setups, AI agent integrations, or software engineering. Reach out via email, social links, or check my learning accomplishments.
          </p>
        </div>

        <Row className="contact-layout">
          <Col xs={12} lg={5} className="contact-info-panel">
            {contactInfo.map((info, idx) => (
              <a 
                href={info.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                key={idx} 
                className="contact-info-card"
                style={{ textDecoration: "none" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = info.color;
                  e.currentTarget.style.boxShadow = `0 4px 20px -5px ${info.color}35`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.boxShadow = "var(--shadow-premium)";
                }}
              >
                <div 
                  className="contact-info-icon-wrapper"
                  style={{ 
                    color: info.color, 
                    borderColor: `${info.color}30`, 
                    backgroundColor: `${info.color}10`,
                    boxShadow: `0 0 10px ${info.color}15`
                  }}
                >
                  {info.icon}
                </div>
                <div>
                  <div className="contact-info-title">{info.title}</div>
                  <div className="contact-info-value">{info.value}</div>
                </div>
              </a>
            ))}
          </Col>

          <Col xs={12} lg={7}>
            <div className="glass-container h-100">
              <h3 style={{ fontSize: "1.45rem", fontWeight: "700", marginBottom: "25px", color: "#fff" }}>
                Education & Verification Portals
              </h3>
              <p style={{ color: "var(--color-text-secondary)", marginBottom: "25px", fontSize: "0.95rem", lineHeight: "1.5" }}>
                Check my learning verifications, coding performance metrics, and data science certificates across global platforms.
              </p>
              
              <div className="profiles-hub-grid">
                {learningPlatforms.map((platform, idx) => (
                  <a 
                    href={platform.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    key={idx}
                    className="profile-link-card"
                  >
                    <img src={platform.img} alt={platform.name} />
                    <span>{platform.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
