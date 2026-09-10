const TechnologyCard = ({
  technology,
  selectedStack,
  onAddToStack
}) => {

const isAdded = selectedStack.some(
  (item) => item.id === technology.id
);

  return (
    <article className="technology-card">

      <div className="card-top">
        <img
          src={technology.icon}
          alt={`${technology.name} icon`}
          className="technology-icon"
        />

        <span className="technology-badge">
          {technology.badge}
        </span>
      </div>

      <h3>{technology.name}</h3>

      <p className="technology-description">
        {technology.description}
      </p>

      <div className="technology-meta">
        <span className="category-chip">
          {technology.category}
        </span>

        <span className="difficulty">
          {technology.difficulty}
        </span>

        <span className="rating">
          ★ {technology.rating}
        </span>
      </div>

     <button
  className={`add-stack-btn ${isAdded ? "added" : ""}`}
  onClick={() => onAddToStack(technology)}
  disabled={isAdded}
>
  {isAdded ? "✓ Added to Stack" : "Add to Stack"}
</button>

    </article>
  );
};

export default TechnologyCard;