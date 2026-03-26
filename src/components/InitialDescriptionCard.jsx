/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
*/

//Global Imports
import "../css/CaseCard.css";
import TagBubble from "./TagBubble";

// This component renders the initial description of a case, along with any associated issue tags, in a card format. It is used in the Case Details view to provide context about the case when it is first opened.
const InitialDescriptionCard = ({ caseData }) => {
  return (
    <div className="initial-description-card">
      <div className="across between">
        <h3>{caseData.createdBy}</h3>
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
