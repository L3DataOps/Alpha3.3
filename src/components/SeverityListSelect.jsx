/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
*/

// This component renders a dropdown select element for choosing the severity (regular, immediate) for the Create a Case section.
const SeverityListSelect = ({ severity, setSeverity }) => {
  return (
    <select value={severity} onChange={(e) => setSeverity(e.target.value)}>
      <option value="">Select Severity</option>
      <option value="Regular Hours">Regular Hours</option>
      <option value="Immediate">Immediate</option>
    </select>
  );
};

export default SeverityListSelect;
