/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
*/

//Global Imports
import { useTabs } from "../context/TabContext";
import { useNavigate } from "react-router-dom";
import closeIcon from "../images/close.png";

// Component for the tab bar that displays open tabs and allows navigation between them
const TabBar = () => {
  // Get the tabs, active tab, and functions to set active tab and close tabs from the TabContext
  const { tabs, activeTab, setActiveTab, closeTab } = useTabs();
  const navigate = useNavigate();

  return (
    <div className="tab-bar">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`tab ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => {
            setActiveTab(tab.id);
            navigate(tab.path);
          }}
        >
          {tab.title}
          <span
            className="close"
            onClick={(e) => {
              e.stopPropagation();
              closeTab(tab.id);
            }}
          >
            <img src={closeIcon} alt="Close" />
          </span>
        </div>
      ))}
    </div>
  );
};

export default TabBar;
