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
