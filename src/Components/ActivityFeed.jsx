import React from "react";
import "./ActivityFeed.css";

const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

const activityBars = [
  [40, 60, 30],
  [20, 50, 70],
  [10, 30, 20],
  [60, 30, 50],
  [70, 80, 40],
  [50, 40, 60],
  [30, 20, 10],
];

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <span className="activity-title">Activity</span>
        <span className="activity-note">3 appointments on this week</span>
      </div>
      <div className="activity-chart">
        {activityBars.map((bars, index) => (
          <div key={index} className="day-column">
            <div className="bars">
              {bars.map((height, idx) => (
                <div
                  key={idx}
                  className={`bar bar-${idx}`}
                  style={{ height: `${height}px` }}
                ></div>
              ))}
            </div>
            <div className="day-label">{days[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
