import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";
import technologiesData from "../data/technologies.json";

const TechnologyList = ({
  selectedStack,
  onAddToStack,
  onRemoveFromStack,
  onRemoveAll,
}) => {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTechnologies(technologiesData);
    setLoading(false);
  }, []);

  return (
    <section
      className="technologies-section"
      id="technologies"
    >
      <div className="section-heading">
        <h2>
          Explore the <span>Technologies</span>
        </h2>

        <p>
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {loading ? (
        <p className="loading-text">
          Loading technologies...
        </p>
      ) : (
        <div className="technologies-layout">
          <div className="technology-grid">
            {technologies.map((technology) => {
              const isSelected = selectedStack.some(
                (item) => item.id === technology.id
              );

              return (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isSelected={isSelected}
                  onAddToStack={onAddToStack}
                />
              );
            })}
          </div>

          <StackSidebar
            selectedStack={selectedStack}
            onRemoveFromStack={onRemoveFromStack}
            onRemoveAll={onRemoveAll}
          />
        </div>
      )}
    </section>
  );
};

export default TechnologyList;