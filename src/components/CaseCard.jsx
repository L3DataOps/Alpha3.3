import { Link } from "react-router-dom";
import TagBubble from "./TagBubble";

const CaseCard = ({ cases }) => {
  return (
    <Link to={`/cases/${cases._id}`} className="case-card-link">
      <div className="case-card">
        <h3>{cases.caseNumber}</h3>
        <p> {cases.caseCategory}</p>
        <p> {cases.siteName}</p>
        <p> {cases.caseSeverity}</p>
        <p> (Action Taken){cases.caseActionTaken}</p>
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
