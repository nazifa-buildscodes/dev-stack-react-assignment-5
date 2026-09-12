const StackSidebar = ({
  selectedStack,
  onRemoveFromStack,
  onRemoveAll,
}) => {
  return (
    <aside className="stack-sidebar">
      <div className="stack-heading">
        <h3>Your Stack</h3>

        <p>
          {selectedStack.length}{" "}
          {selectedStack.length === 1
            ? "Technology Selected"
            : "Technologies Selected"}
        </p>
      </div>

      {selectedStack.length === 0 ? (
        <div className="empty-stack">
          <h3> Stack is empty yet.</h3>

          <p>
            Add technologies from the list to build your stack.
          </p>
        </div>
      ) : (
        <>
          <div className="stack-items">
            {selectedStack.map((technology) => (
              <div
                className="stack-item"
                key={technology.id}
              >
                <img
                  src={technology.icon}
                  alt={`${technology.name} icon`}
                />

                <div className="stack-item-info">
                  <strong>{technology.name}</strong>
                  <span>{technology.category}</span>
                </div>

                <button
                  className="remove-item-btn"
                  onClick={() => onRemoveFromStack(technology.id)}
                  aria-label={`Remove ${technology.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            className="remove-all-btn"
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default StackSidebar;