import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import InitialDescriptionCard from "../components/InitialDescriptionCard";
import SummaryCard from "../components/SummaryCard";

const CaseDetails = () => {
  const { id } = useParams();
  const [caseData, setCaseData] = useState(null);

  useEffect(() => {
    const fetchCase = async () => {
      const response = await fetch(`/api/cases/${id}`);
      const data = await response.json();
      setCaseData(data);
    };

    fetchCase();
  }, [id]);

  if (!caseData) return <p>Loading case...</p>;

  return (
    <div>
      <SummaryCard caseData={caseData} />
      <InitialDescriptionCard caseData={caseData} />
    </div>
  );
};

export default CaseDetails;
