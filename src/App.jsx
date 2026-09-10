import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";
import Footer from "./components/Footer";
function App() {
  const [selectedStack, setSelectedStack] = useState([]);

  const handleAddToStack = (technology) => {
    const alreadyAdded = selectedStack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setSelectedStack((currentStack) => [
      ...currentStack,
      technology
    ]);

    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemoveFromStack = (id) => {
    const removedTechnology = selectedStack.find(
      (item) => item.id === id
    );

    setSelectedStack((currentStack) =>
      currentStack.filter((item) => item.id !== id)
    );

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    if (selectedStack.length === 0) {
      return;
    }

    setSelectedStack([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <TechnologyList
          selectedStack={selectedStack}
          onAddToStack={handleAddToStack}
          onRemoveFromStack={handleRemoveFromStack}
          onRemoveAll={handleRemoveAll}
        />
      </main>

<Footer />


      <ToastContainer
        position="top-right"
        autoClose={2000}
      />
    </>
  );
}

export default App;