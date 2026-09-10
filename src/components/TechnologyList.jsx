import { useEffect, useState } from "react";
import technologiesData from "../data/technologies.json";
import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";

const TechnologyList = ({
  selectedStack,
  onAddToStack,
  onRemoveFromStack,
  onRemoveAll
}) => {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = () => {
      setTechnologies(technologiesData);
      setLoading(false);
    };

    loadTechnologies();
  }, []);

  if (loading) {
    return (
      <section
        className="technology-section"
        id="technologies"
      >
        <div className="section-container">
          <div className="loading-message">
            Loading technologies...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="technology-section"
      id="technologies"
    >
      <div className="section-container">

        <div className="section-heading">
          <h2>
            Explore the <span>Technologies</span>
          </h2>

          <p>
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="technology-layout">

          <div className="technology-grid">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                selectedStack={selectedStack}
                onAddToStack={onAddToStack}
              />
            ))}
          </div>

          <StackSidebar
            selectedStack={selectedStack}
            onRemoveFromStack={onRemoveFromStack}
            onRemoveAll={onRemoveAll}
          />

        </div>

      </div>
    </section>
  );
};

export default TechnologyList;