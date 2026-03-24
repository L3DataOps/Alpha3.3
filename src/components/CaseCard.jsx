/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
-- 2026-03-24 : Marcos - Updated case card layout to align with Home columns
*/

//Global Imports
import { useTabs } from "../context/TabContext";
import { useNavigate } from "react-router-dom";
import TagBubble from "./TagBubble";
import "../css/Home.css";

// This component renders a card for each case in the Home page open case list. It displays key information about the case and allows users to click on it to view the more details page for that case.
const CaseCard = ({ cases }) => {
  //Tab and navigation hooks to open case details in a new tab when the card is clicked
  const { addTab } = useTabs();
  const navigate = useNavigate();

  const handleOpen = () => {
    const id = cases._id || cases.caseNumber;

    addTab({
      id,
      title: cases.caseNumber,
      path: `/cases/${id}`,
    });

    navigate(`/cases/${id}`);
  };

  // Function to format the elapsed time since the case was created in a human-readable format (e.g., "2h 30min")
  const formatElapsedTime = (dateString) => {
    const now = new Date();
    const past = new Date(dateString);

    let diff = Math.floor((now - past) / 1000); // seconds

    const units = [
      { label: "y", value: 60 * 60 * 24 * 365 },
      { label: "mo", value: 60 * 60 * 24 * 30 },
      { label: "d", value: 60 * 60 * 24 },
      { label: "h", value: 60 * 60 },
      { label: "min", value: 60 },
    ];

    const results = [];

    // Calculate the amount of each time unit and build the result string
    for (let unit of units) {
      const amount = Math.floor(diff / unit.value);
      if (amount > 0) {
        results.push(`${amount}${unit.label}`);
        diff -= amount * unit.value;
      }
      if (results.length === 2) break; // only keep 2 units
    }

    return results.length ? results.join(" ") : "0min";
  };

  // Get the formatted elapsed time since the case was created
  const elapsedTime = formatElapsedTime(cases.createdAt);

  // Render the case card with all the relevant information and tags. Clicking on the card will open the case details in a new tab.
  return (
    <div onClick={handleOpen} className="case-card-link">
      <div className="case-card">
        <div className="case-cell">
          <h4>{cases.caseEquipment.caseType}</h4>
          <h3>{cases.caseNumber}</h3>
        </div>
        <div className="case-cell">
          <p> {cases.siteNumber}</p>
          <p> {cases.siteName}</p>
        </div>
        <div className="case-cell">
          <p> {elapsedTime}</p>
        </div>
        <div className="case-cell">
          <p> Status:</p>
          <p> {cases.actionTaken}</p>
        </div>
        <div className="case-cell">
          <p> {cases.caseEquipment.equipmentName}</p>
        </div>
        <div className="case-cell containerTags">
          {cases.issueTags.map((tag, index) => (
            <TagBubble key={index} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
