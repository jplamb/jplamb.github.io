import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Pages } from "./Utils/PageConfig";

const scrollTo = (id) => {
  document.getElementById(id).scrollIntoView();
};

const App = () => {
  return (
    <div className="App">
      <Navbar onNavigate={scrollTo} />
      <main>
        {Pages.filter((page) => !["blog", "contact"].includes(page.path)).map(
          (page) => (
            <page.component key={page.path} id={page.path} />
          )
        )}
      </main>
    </div>
  );
};

export default App;
