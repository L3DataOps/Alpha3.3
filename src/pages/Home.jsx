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
