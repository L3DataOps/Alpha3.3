/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
-- 2026-03-26 : Daniel - Updated with dispatch and bundled ticket info
*/

//Global Imports
import "../css/CaseCard.css";

// This component renders a card for the Accessory Details section of the Case Details page.
const AccessoryCard = ({ dispatch, bundledCases }) => {
  console.log(dispatch);
  console.log(bundledCases);
  return (
    <div className="accessory-card">
      <h3>Dispatch Centers</h3>
      {dispatch.map((item, index) => (
        <p key={index}>
          {item.agency}
          {" - "}
          {item.phone}
          {" #"}
          {item.extension}
        </p>
      ))}

      <div className="bar"></div>

      <h3>Bundled Cases</h3>
      {bundledCases.map((item, index) => (
        <p key={index}>{item.caseNumber}</p>
      ))}
    </div>
  );
};

export default AccessoryCard;
