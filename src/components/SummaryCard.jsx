/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
*/

//Global Imports
import "../css/CaseCard.css";

/*
The SummaryCard component displays a summary of the case information,
including the case type, case number, site name, equipment ID, equipment name,
and the date the case was created. It uses the caseData prop to populate these details.
*/
const SummaryCard = ({ caseData }) => {
  console.log("SummaryCard caseData:", caseData); // Debugging log to check the structure of caseData

  return (
    <div className="summary-card">
      <div className="title">
        <h3>{caseData.caseEquipment.caseType}</h3>
        <h3>{caseData.caseNumber}</h3>
      </div>
      <div className="details">
        <p>
          <strong>Site:</strong> {caseData.siteName}
        </p>
        <p>
          <strong>{caseData.caseEquipment.equipmentID}</strong>
        </p>
        <p>{caseData.caseEquipment.equipmentName}</p>
      </div>

      <div className="bar"></div>

      <p className="date">
        <strong>Date Created:</strong> {caseData.createdAt.split("T")[0]}
        <space></space>
        {caseData.createdAt.split("T")[1].split(".")[0]}
      </p>
    </div>
  );
};

export default SummaryCard;
