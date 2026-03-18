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
