/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Daniel - Added comment tracking
*/

//Global Imports
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import InitialDescriptionCard from "../components/InitialDescriptionCard";
import SummaryCard from "../components/SummaryCard";
import AccessoryCard from "../components/AccessoryCard";
import AddInfoCard from "../components/AddInfoCard";
import TabCard from "../components/TabCard";
import "../css/CaseCard.css";
import ActivityNotesSection from "../components/ActivityNotesSection";

const CaseDetails = () => {
  //Paramater Definition to pass down and grab Case ID
  const { id } = useParams();

  // State definition for
  const [caseData, setCaseData] = useState(null);

  // Fetch API call to grab case data
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
          setCaseData("error");
          return;
        }

        setCaseData(data);
      } catch (err) {
        console.error("Fetch failed:", err);
        setCaseData("error");
      }
    };

    fetchCase();
  }, [id]);

  if (!caseData) return <p>Loading case...</p>;

  if (caseData === "error") return <p>Case not found</p>;

  console.log("CaseDetails caseData:", caseData);

  return (
    <div className="parent">
      <div className="main">
        <SummaryCard caseData={caseData} />

        <div className="descandinfo">
          <InitialDescriptionCard caseData={caseData} />
          <div className="info">
            <AccessoryCard
              dispatch={caseData.dispatch}
              bundledCases={caseData.bundledTickets}
            />
            <AddInfoCard caseData={caseData} />
          </div>
        </div>
      </div>
      <TabCard caseData={caseData} />
      <ActivityNotesSection
        caseData={caseData}
        currentUser="First Name Last Name"
      />
    </div>
  );
};

export default CaseDetails;
