/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Daniel - Added comment tracking
-- 2026-03-25 : Marcos - Updated Home component to filter open cases when no search term is entered and show both open and closed cases when a search term is entered. Also sorted cases to show open cases first.
*/

//Global Imports
import { useEffect, useState } from "react";
import CaseCard from "../components/CaseCard";
import "../css/Home.css";

const Home = () => {
  // Sets state for cases and search bar
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch API Call to grab cases
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

  // Legs cases grabed
  console.log("Cases on Home:", cases);

  // Filters cases based on value in search box and updates state
  const filteredCases = cases.filter((c) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      c.caseNumber?.toString().toLowerCase().includes(search) ||
      c.siteName?.toLowerCase().includes(search) ||
      c.siteNumber?.toLowerCase().includes(search) ||
      c.caseCategory?.toLowerCase().includes(search) ||
      c.caseSeverity?.toLowerCase().includes(search) ||
      c.actionTaken?.toLowerCase().includes(search) ||
      c.caseEquipment?.equipmentName?.toLowerCase().includes(search) ||
      c.issueTags?.some((tag) => tag.toLowerCase().includes(search));

    // No search entered: only show open cases
    if (search === "") {
      return c.isOpen === true;
    }

    // Search entered: show both open and closed if they match
    return matchesSearch;
  });

  const sortedCases = [...filteredCases].sort((a, b) => {
    if (a.isOpen === b.isOpen) return 0;
    return a.isOpen ? -1 : 1;
  });

  return (
    <div className="home">
      <h1>Open Cases</h1>
      <input
        type="text"
        placeholder="Search cases..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Updates search state value on keypress
        className="search-bar"
      />
      <div className="columns">
        <h2>Ticket#</h2>
        {/*<h2>Category</h2>*/}
        <h2>Site</h2>
        {/*<h2>Severity</h2>*/}
        <h2>Date/Time</h2>
        <h2>Action Taken</h2>
        <h2>Equipment</h2>
        <h2>Tags</h2>
      </div>
      <div className="bar"></div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {sortedCases.map(
            (
              cases, // Maps thru the filtered cases based on the search and populates CaseCard comp. per case
            ) => (
              <CaseCard key={cases.id} cases={cases} />
            ),
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
