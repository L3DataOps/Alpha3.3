/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
*/

//Global Imports
import "../css/CaseCard.css";

// Component for displaying a tag as a bubble in the CaseCard component
const TagBubble = ({ tag }) => {
  return (
    <div className="tag-bubble">
      <p>{tag}</p>
    </div>
  );
};

export default TagBubble;
