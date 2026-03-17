import { useEffect, useState } from "react";
import CaseCard from "../components/CaseCard";

import "../css/Home.css";

const Home = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await fetch("/api/cases");

        if (!response.ok) {
          throw new Error("Failed to fetch cases");
        }

        const data = await response.json();
        setCases(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cases:", error);
        setLoading(false);
      }
    };

    fetchCases();
  }, []);

  console.log("Cases on Home:", cases);

  return (
    <div className="home">
      <h1>Home Page</h1>
      <div className="columns">
        <h2>Ticket#</h2>
        <h2>Category</h2>
        <h2>Site</h2>
        <h2>Severity</h2>
        <h2>Action Taken</h2>
        <h2>Date/Time</h2>
        <h2>Equipment</h2>
        <h2>Tags</h2>
      </div>
      <div className="bar"></div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {cases.map((cases) => (
            <CaseCard key={cases.id} cases={cases} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
