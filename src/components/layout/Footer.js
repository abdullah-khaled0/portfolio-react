import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-wrapper">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="footer-content">
              <div className="footer-logo">
                <span>&lt;Abdullah.AI /&gt;</span>
              </div>
              <div className="footer-text">
                <p>© {currentYear} Abdullah Khaled. All Rights Reserved.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
