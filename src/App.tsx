import React from "react";
import TrafficLight from "./components/TrafficLight";
import "./styles.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <TrafficLight />
    </div>
  );
};

export default App;
