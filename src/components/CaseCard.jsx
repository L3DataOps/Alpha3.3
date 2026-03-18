import { Link } from "react-router-dom";
import TagBubble from "./TagBubble";
import "../css/Home.css";

const CaseCard = ({ cases }) => {
  return (
    <Link to={`/cases/${cases._id}`} className="case-card-link">
      <div className="case-card">
        <div>
          <h4>{cases.caseEquipment.caseType}</h4>
          <h3>{cases.caseNumber}</h3>
        </div>
        <div>
          <p> {cases.siteNumber}</p>
          <p> {cases.siteName}</p>
        </div>

        <p> {cases.caseSeverity}</p>
        <p> {cases.actionTaken}</p>
        <p>
          {cases.createdAt.split("T")[0]} <space></space>
          {cases.createdAt.split("T")[1].split(".")[0]}
        </p>
        <p> {cases.caseEquipment.equipmentName}</p>
        <p>
          {cases.issueTags.map((tag, index) => (
            <TagBubble key={index} tag={tag} />
          ))}
        </p>
      </div>
    </Link>
  );
};

export default CaseCard;
