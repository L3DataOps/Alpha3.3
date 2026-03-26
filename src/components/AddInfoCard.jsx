/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
-- 2026-03-26 : Daniel - Added cases additional info
*/

//Global Imports
import "../css/CaseCard.css";

// This component renders a card for the Additional Information section of the Case Details page.
const AddInfoCard = ({ caseData }) => {
  return (
    <div className="add-info-card">
      <h3>Additional Information</h3>
      <p>{caseData.additionalInfo || "No additional info"}</p>
    </div>
  );
};

export default AddInfoCard;
