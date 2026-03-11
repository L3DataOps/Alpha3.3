const CaseCard = ({ cases }) => {
  return (
    <div className="case-card">
      <h3>{cases.caseNumber}</h3>
      <p>Site: {cases.siteName}</p>

      <p>{cases.initialDescription}</p>
      <p>Action Taken: {cases.caseActionTaken}</p>
    </div>
  );
};

export default CaseCard;
