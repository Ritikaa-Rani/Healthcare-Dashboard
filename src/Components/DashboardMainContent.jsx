import React from "react";
import DashboardOverview from "./DashboardOverview";
import CalendarView from "./CalenderView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import "./DashboardMainContent.css";

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main">
      <div className="dashboard-grid">
        <div className="left-column">
          <DashboardOverview />
          <ActivityFeed />
        </div>
        <div className="right-column">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
