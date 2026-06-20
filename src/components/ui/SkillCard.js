import * as FaIcons from "react-icons/fa";

export const SkillCard = ({ category, iconName, color, items = [] }) => {
  // Dynamically resolve FaIcons based on iconName
  const IconComponent = FaIcons[iconName] || FaIcons.FaCode;

  return (
    <div className="skill-category-card" style={{ borderTop: `3px solid ${color}` }}>
      <div className="skill-category-header">
        <div 
          className="skill-icon-container" 
          style={{ backgroundColor: `${color}15`, color: color, boxShadow: `0 0 10px ${color}20` }}
        >
          <IconComponent />
        </div>
        <h3 className="skill-category-title">{category}</h3>
      </div>
      <div className="skills-tags-wrapper">
        {items.map((skill, index) => (
          <span 
            key={index} 
            className="skill-badge"
            onMouseEnter={(e) => {
              e.target.style.borderColor = color;
              e.target.style.color = '#fff';
              e.target.style.boxShadow = `0 0 8px ${color}30`;
              e.target.style.background = `${color}08`;
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.target.style.color = 'var(--color-text-secondary)';
              e.target.style.boxShadow = 'none';
              e.target.style.background = 'rgba(255, 255, 255, 0.04)';
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
