import { useState } from "react";
import "../css/CaseCard.css";
import HomeTabCard from "./HomeTabCard";

const TabCard = ({ caseData }) => {
  // Track which tab is active
  const [activeTab, setActiveTab] = useState("summary");

  // Render tab buttons
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

  // Render content based on active tab
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
