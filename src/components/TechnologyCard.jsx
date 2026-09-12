const TechnologyCard = ({
  technology,
  isSelected,
  onAddToStack,
}) => {
  return (
    <article
      className={`technology-card ${
        isSelected ? "selected-card" : ""
      }`}
    >
      <div className="technology-card-top">
        <img
          src={technology.icon}
          alt={technology.name}
          className="technology-icon"
        />

        <span className="technology-badge">
          {technology.badge}
        </span>
      </div>

      <h3>{technology.name}</h3>

      <p>{technology.description}</p>

      <div className="technology-meta">
        <span className="category">
          {technology.category}
        </span>

        <span className="difficulty">
          {technology.difficulty}
        </span>

        <span className="rating">
          ⭐ {technology.rating}
        </span>
      </div>

      <button
        className={`add-stack-btn ${
          isSelected ? "selected-button" : ""
        }`}
        onClick={() => onAddToStack(technology)}
        disabled={isSelected}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
};

export default TechnologyCard;