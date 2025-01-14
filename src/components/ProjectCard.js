import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, linkUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-btn-container">
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
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};
