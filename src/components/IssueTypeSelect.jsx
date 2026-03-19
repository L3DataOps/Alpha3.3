/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
*/

// This component renders a dropdown select element for choosing the issue type (Alarm, reported, PM repair, Other) for the Create a Case section.
const IssueTypeSelect = ({ issueType, setIssueType }) => {
  return (
    <div className="issue-type-select">
      <select value={issueType} onChange={(e) => setIssueType(e.target.value)}>
        <option value="">Select issue type</option>
        <option value="network">Alarm</option>
        <option value="hardware">Personnel Reported</option>
        <option value="software">PM Repair</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
};

export default IssueTypeSelect;
