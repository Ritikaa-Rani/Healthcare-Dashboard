import React from "react";
import DashboardOverview from "./DashboardOverview";
import CalendarView from "./CalenderView";
import UpcomingSchedule from "./UpcomingSchedule";

const DashboardMainContent = () => {
  return (
    <>
      <DashboardOverview />
      <CalendarView />
      <UpcomingSchedule />
    </>
  );
};

export default DashboardMainContent;
