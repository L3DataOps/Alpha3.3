import { Link } from "react-router-dom";

const CaseCard = ({ cases }) => {
  return (
    <Link to={`/cases/${cases._id}`} className="case-card-link">
      <div className="case-card">
        <h3>{cases.caseNumber}</h3>
        <p>{cases.caseCategory}</p>
        <p>Severity: {cases.caseSeverity}</p>
      </div>
    </Link>
  );
};

export default CaseCard;
