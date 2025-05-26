import React from "react";
import { FaLungs, FaTooth, FaBone } from "react-icons/fa";
import "./HealthStatusCards.css";

const healthCards = [
  {
    icon: <FaLungs className="icon red" />,
    title: "Lungs",
    date: "26 Okt 2021",
    progress: 60,
    barColor: "red",
  },
  {
    icon: <FaTooth className="icon cyan" />,
    title: "Teeth",
    date: "26 Okt 2021",
    progress: 60,
    barColor: "cyan",
  },
  {
    icon: <FaBone className="icon gray" />,
    title: "Bone",
    date: "26 Okt 2021",
    progress: 60,
    barColor: "purple",
  },
];

const HealthStatusCards = () => {
  return (
    <div className="health-cards-container">
      {healthCards.map((card, idx) => (
        <div key={idx} className="health-card">
          <div className="health-card-header">
            <div className="card-header">
              {card.icon}
              <div className="card-title">{card.title}</div>
            </div>
            <div className="card-info">
              <div className="card-date">Date: {card.date}</div>
            </div>
          </div>

          <div className="progress-bar-bg">
            <div
              className={`progress-bar ${card.barColor}`}
              style={{ width: `${card.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
