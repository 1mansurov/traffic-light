import React, { useState } from "react";

const TrafficLight: React.FC = () => {
  const [light, setLight] = useState<string>("green");

  const changeLight = (currentLight: string): string => {
    switch (currentLight) {
      case "green":
        return "yellow";
      case "yellow":
        return "red";
      case "red":
        return "green";
      default:
        return "green";
    }
  };

  const handleLightChange = () => {
    setLight(changeLight(light));
  };

  return (
    <div className="traffic-light-container">
      <h1 className="title">Traffic Light Control</h1>
      <div className="traffic-light">
        <div className={`light ${light === "red" ? "red" : ""}`}></div>
        <div className={`light ${light === "yellow" ? "yellow" : ""}`}></div>
        <div className={`light ${light === "green" ? "green" : ""}`}></div>
      </div>
      <button onClick={handleLightChange} className="change-light-btn">
        Change Light
      </button>
    </div>
  );
};

export default TrafficLight;
