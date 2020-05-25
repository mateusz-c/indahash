import React from "react";
import "./App.scss";
import Team from "./components/Team/Team";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <header className="app__header">Meet our team</header>
        <Team />
      </div>
    </div>
  );
};

export default App;
