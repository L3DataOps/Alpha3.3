import "../css/CaseCard.css";

const SummaryCard = ({ caseData }) => {
  return (
    <div className="summary-card">
      <div className="title">
        <h6>{caseData.caseEquipment.caseType}</h6>
        <h3>{caseData.caseNumber}</h3>
      </div>
      <div className="details">
        <p>
          <strong>Site:</strong> {caseData.siteName}
        </p>
        <p>
          <strong>{caseData.caseEquipment.equipmentID}</strong>
        </p>
        <p>{caseData.caseEquipment.equipmentName}</p>
      </div>

      <div className="bar"></div>

      <p className="date">
        <strong>Date Created:</strong> {caseData.createdAt.split("T")[0]}
        {caseData.createdAt.split("T")[1].split(".")[0]}
      </p>
    </div>
  );
};

export default SummaryCard;
