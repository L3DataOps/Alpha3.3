import "../css/CaseCard.css";
import TagBubble from "./TagBubble";

const InitialDescriptionCard = ({ caseData }) => {
  return (
    <div className="initial-description-card">
      <div className="across between">
        <h3>Initial Description</h3>
        <div>
          {caseData.issueTags.map((tag, index) => (
            <TagBubble key={index} tag={tag} />
          ))}
        </div>
      </div>

      <div className="bar"></div>
      <p>{caseData.initialDescription}</p>
    </div>
  );
};

export default InitialDescriptionCard;
