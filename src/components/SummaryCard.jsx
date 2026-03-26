/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
-- 2026-03-26 : Daniel - Updated Closed timestamp
*/

//Global Imports
import "../css/SummaryCard.css";
import flag from "../images/flag.png";
import DateCard from "./DateCard";
import priority from "../images/signal.png";

/*
The SummaryCard component displays a summary of the case information,
including the case type, case number, site name, equipment ID, equipment name,
and the date the case was created. It uses the caseData prop to populate these details.
*/
const SummaryCard = ({ caseData }) => {
  console.log("SummaryCard caseData:", caseData); // Debugging log to check the structure of caseData

  return (
    <div className="summary-card">
      <div className="header">
        <div className="tickettype">
          <h2>{caseData.caseEquipment.caseType}</h2>
          <h2 id="casenum">{caseData.caseNumber}</h2>
        </div>
        <img src={flag} alt="flag" id="flag" />
      </div>

      <div className="subheader">
        <div className="site">
          <h4>
            {caseData.caseEquipment.equipmentID} -{" "}
            <span id="eqnum">{caseData.caseEquipment.equipmentName}</span>
          </h4>
        </div>
        <h4 id="category">{caseData.caseCategory}</h4>
      </div>

      <div className="bar"></div>

      <div className="datestamp">
        <strong>Date Created:</strong>
        <DateCard time={caseData.createdAt} />
      </div>

      <div className="datestamp">
        <strong>Tech Enroute:</strong>
        <DateCard time={caseData.createdAt} />
      </div>

      <div className="datestamp">
        <strong>Tech Onsite:</strong>
        <DateCard time={caseData.createdAt} />
      </div>

      <div className="datestamp">
        <strong>Comleted:</strong>
        <DateCard time={caseData.closedAt} />
      </div>

      <div className="bar"></div>

      <div className="header">
        <div className="action">
          <h4>Action Taken</h4>
          <h3 id="actiontaken">{caseData.actionTaken}</h3>
        </div>

        <div className="priority">
          <h4>Priority</h4>
          <img src={priority} alt="priority" id="priority" />
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
