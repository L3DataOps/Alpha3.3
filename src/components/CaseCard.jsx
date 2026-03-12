const CaseCard = ({ cases }) => {
  const tags = Array.isArray(cases.issueTags)
    ? cases.issueTags
    : cases.issueTags?.split(",") || [];

  return (
    <div className="case-card">
      <h3>{cases.caseNumber}</h3>
      <p>
        <strong>{cases.siteName}</strong>
      </p>
      <p>Equipment: {cases.caseEquipment?.equipmentName}</p>
      <p>Category: {cases.caseCategory}</p>
      <p>Severity: {cases.caseSeverity}</p>
      <p>Tags: {tags.join(", ")}</p>
      <p>Description: {cases.initialDescription}</p>
      <p>Action Taken: {cases.caseActionTaken}</p>
    </div>
  );
};

export default CaseCard;
