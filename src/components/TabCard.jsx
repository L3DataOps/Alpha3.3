/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
*/

//Global Imports
import { useState } from "react";
import "../css/CaseCard.css";
import HomeTabCard from "./HomeTabCard";

// Component for displaying a card with tabs for case details in the CaseDetails page
const TabCard = ({ caseData }) => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("summary");

  // Render the tab buttons
  const renderTabs = () => (
    <div className="tab-buttons" style={{ display: "flex", gap: "1rem" }}>
      <button
        onClick={() => setActiveTab("summary")}
        className={activeTab === "summary" ? "active" : ""}
      >
        Summary
      </button>
      <button
        onClick={() => setActiveTab("accessory")}
        className={activeTab === "accessory" ? "active" : ""}
      >
        Accessories
      </button>
      <button
        onClick={() => setActiveTab("additional")}
        className={activeTab === "additional" ? "active" : ""}
      >
        Additional Info
      </button>
    </div>
  );

  // Render the content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "summary":
        return <HomeTabCard caseData={caseData} />;

      case "accessory":
        return (
          <div>
            <h4>Accessories</h4>
            {caseData.accessories?.length ? (
              <ul>
                {caseData.accessories.map((acc, i) => (
                  <li key={i}>{acc.name}</li>
                ))}
              </ul>
            ) : (
              <p>No accessories added</p>
            )}
          </div>
        );

      case "additional":
        return (
          <div>
            <h4>Additional Info</h4>
            <p>{caseData.additionalInfo || "No additional info"}</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    // Main render of this TabCard component, including the tab buttons and the content area
    <div
      className="tab-card"
      style={{ border: "1px solid #ccc", padding: "1rem" }}
    >
      {renderTabs()}
      <div className="tab-content" style={{ marginTop: "1rem" }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default TabCard;
