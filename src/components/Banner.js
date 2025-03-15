import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import headerImg from "../assets/img/profile.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Scientist", "Analyst" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Abdullah a Data `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Scientist", "Analyst" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I'm focused on leveraging advanced AI and data analysis to drive business growth. I specialize in transforming complex datasets into actionable insights, optimizing strategies, and forecasting key metrics to support data-driven decision-making. My expertise in Machine Learning enables me to develop predictive models, enhance customer segmentation, and streamline operations with intelligent automation. I help businesses uncover hidden opportunities, improve performance, and achieve their goals through innovative, data-powered solutions.</p>
                  <Button
                    style={{
                      backgroundColor: "#e31bcf",
                      borderColor: "#e31bcf",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#ab1a9c";
                      e.target.style.borderColor = "#ab1a9c";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#e31bcf";
                      e.target.style.borderColor = "#e31bcf";
                    }}
                    href="https://docs.google.com/document/d/1_1tkH33oggXdtNtLS1ek_hHgC8YEHGkb/edit?usp=sharing&ouid=114996828737559694387&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer">
                    View My Resume
                 </Button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
