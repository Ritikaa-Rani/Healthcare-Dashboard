import React from "react";
import "./Sidebar.css";
import {
  FaTachometerAlt,
  FaHistory,
  FaCalendarAlt,
  FaNotesMedical,
  FaChartBar,
  FaComments,
  FaLifeRing,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-section">
          <p className="sidebar-heading">General</p>
          <SidebarItem icon={<FaTachometerAlt />} label="Dashboard" active />
          <SidebarItem icon={<FaHistory />} label="History" />
          <SidebarItem icon={<FaCalendarAlt />} label="Calendar" />
          <SidebarItem icon={<FaNotesMedical />} label="Appointments" />
          <SidebarItem icon={<FaChartBar />} label="Statistics" />
        </div>

        <div className="sidebar-section">
          <p className="sidebar-heading">Tools</p>
          <SidebarItem icon={<FaComments />} label="Chat" />
          <SidebarItem icon={<FaLifeRing />} label="Support" />
        </div>

        <div className="sidebar-section setting-bottom">
          <SidebarItem icon={<FaCog />} label="Setting" />
        </div>
      </div>
    </>
  );
};

const SidebarItem = ({ icon, label, active }) => (
  <div className={`sidebar-item ${active ? "active" : ""}`}>
    <span className="sidebar-icon">{icon}</span>
    <span className="sidebar-label">{label}</span>
  </div>
);

export default Sidebar;
