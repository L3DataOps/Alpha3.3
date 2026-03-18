import { useTabs } from "../context/TabContext";
import { useNavigate } from "react-router-dom";

const TabBar = () => {
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
            ✕
          </span>
        </div>
      ))}
    </div>
  );
};

export default TabBar;
