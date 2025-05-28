import "./App.css";
import DashboardMainContent from "./Components/DashboardMainContent";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-section">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
