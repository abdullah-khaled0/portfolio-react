import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/profile.png";
import { FaCode, FaRobot, FaBrain, FaChevronRight } from "react-icons/fa";

export const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150);
  const toRotate = ["AI Engineer", "Agent Architect", "MLOps Developer"];
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(50);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(120);
    }
  };

  return (
    <section className="hero-section" id="home">
      <div className="glow-overlay" style={{ top: '10%', left: '15%' }}></div>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} lg={7}>
            <div>
              <span className="hero-tagline">
                <FaRobot style={{ marginRight: '6px', animation: 'spin 4s linear infinite' }} /> Welcome to the Neural Network Portfolio
              </span>
              <h1 className="hero-title">
                Hi! I'm Abdullah,<br />
                <span className="text-gradient">
                  {text}
                </span>
                <span className="txt-rotate" style={{ borderRight: '0.08em solid var(--color-cyan)' }}></span>
              </h1>
              <p className="hero-subtitle">
                Focused on architecting end-to-end AI automation pipelines, building intelligent multi-agent systems, and deploying scalable MLOps architectures. I specialize in turning state-of-the-art LLMs, RAG models, and autonomous agent workflows into production-grade solutions that optimize operations.
              </p>

              <div className="hero-btn-group">
                <a href="#projects" className="btn-premium">
                  Explore My Projects <FaChevronRight size={14} />
                </a>
                <a
                  href="https://docs.google.com/document/d/1behR90RcPwwK6l1EiVMBzhLDujnY-XgD3lCtktcSbxQ/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-premium"
                >
                  View My CV
                </a>
              </div>

              <div className="hero-stats-grid">
                <div className="stat-item">
                  <span className="stat-value">90%+</span>
                  <span className="stat-label">Task Time Saved for Stakeholders</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">1,000+</span>
                  <span className="stat-label">Production App Users</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">2+</span>
                  <span className="stat-label">Custom MCP Servers Launched</span>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={12} lg={5}>
            <div className="hero-avatar-wrapper">
              <div className="hero-avatar-border">
                <div className="hero-avatar-inner">
                  <img src={headerImg} alt="Abdullah Khaled" />
                  <div className="hero-avatar-scanner"></div>
                </div>
              </div>

              {/* Futuristic floating badges */}
              <div className="avatar-floating-badge badge-1 animate__animated animate__pulse animate__infinite">
                <FaBrain style={{ color: 'var(--color-cyan)' }} />
                <span>LangChain</span>
              </div>
              <div className="avatar-floating-badge badge-2 animate__animated animate__pulse animate__infinite" style={{ animationDelay: '1s' }}>
                <FaCode style={{ color: 'var(--color-violet)' }} />
                <span>FastAPI</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
