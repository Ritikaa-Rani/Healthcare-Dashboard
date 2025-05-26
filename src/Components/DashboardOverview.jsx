import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./DashboardOverview.css";

const DashboardOverview = () => {
  return (
    <>
      <div className="dashboard-heading">
        <h2>Dashboard</h2>
        <p>
          This Week{" "}
          <span className="dropdown">
            <RiArrowDropDownLine />
          </span>
        </p>
      </div>
      <div className="dashboard-overview">
        <AnatomySection />
        <HealthStatusCards />
      </div>
    </>
  );
};

export default DashboardOverview;
