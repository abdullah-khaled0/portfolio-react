import { FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard = ({ title, description, imgUrl, linkUrl, tags = [] }) => {
  return (
    <div className="premium-project-card">
      <div className="project-card-image-wrapper">
        <img src={imgUrl} alt={title} loading="lazy" />
        <div className="project-card-overlay">
          <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="btn-premium">
            Explore Project <FaExternalLinkAlt size={14} />
          </a>
        </div>
      </div>
      <div className="project-card-content">
        <h4 className="project-card-title">{title}</h4>
        <p className="project-card-desc">{description}</p>
        
        {tags.length > 0 && (
          <div className="project-card-tags">
            {tags.map((tag, idx) => (
              <span key={idx} className="project-card-tag">{tag}</span>
            ))}
          </div>
        )}
        
        <div className="project-card-footer mt-auto">
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-btn primary"
          >
            View Resource
          </a>
        </div>
      </div>
    </div>
  );
};
