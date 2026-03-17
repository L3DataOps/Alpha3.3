import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import InitialDescriptionCard from "../components/InitialDescriptionCard";
import SummaryCard from "../components/SummaryCard";
import AccessoryCard from "../components/AccessoryCard";
import AddInfoCard from "../components/AddInfoCard";

const CaseDetails = () => {
  const { id } = useParams();
  const [caseData, setCaseData] = useState(null);

  useEffect(() => {
    const fetchCase = async () => {
      try {
        console.log("Fetching case with id:", id);

        const response = await fetch(`/api/cases/${id}`);
        console.log("Response status:", response.status);

        const data = await response.json();
        console.log("Response data:", data);

        if (!response.ok) {
          console.error("Error from server:", data);
          setCaseData("error"); // 👈 important so it stops loading
          return;
        }

        setCaseData(data);
      } catch (err) {
        console.error("Fetch failed:", err);
        setCaseData("error"); // 👈 prevents infinite loading
      }
    };

    fetchCase();
  }, [id]);

  if (!caseData) return <p>Loading case...</p>;

  if (caseData === "error") return <p>Case not found</p>;

  console.log("CaseDetails caseData:", caseData);

  return (
    <div>
      <div className="across">
        <SummaryCard caseData={caseData} />
        <div className="down">
          <InitialDescriptionCard caseData={caseData} />
          <div className="across">
            <AccessoryCard dispatch={caseData.dispatch} />
            <AddInfoCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetails;
