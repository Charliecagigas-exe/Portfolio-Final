import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import About from "./components/About";
import Apollo from "./content/Apollo";
import Beats from "./content/Beats";
import Career from "./content/Career";
import Meknology from "./content/Meknology";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Resume />
        <Apollo />
        <Beats />
        <Career />
        <Meknology />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
