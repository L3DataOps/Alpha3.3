import "../css/CaseCard.css";
import TagBubble from "./TagBubble";

const InitialDescriptionCard = ({ caseData }) => {
  return (
    <div className="initial-description-card">
      <h3>Initial Description</h3>
      {caseData.issueTags.map((tag, index) => (
        <TagBubble key={index} tag={tag} />
      ))}
      <div className="bar"></div>
      <p>{caseData.initialDescription}</p>
    </div>
  );
};

export default InitialDescriptionCard;
