import { useEffect, useState } from "react";
import SiteCard from "../components/SiteCard";
import "../css/Home.css";

const Home = () => {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    const fetchSites = async () => {
      try {
        const response = await fetch('/api/sites');

        if (!response.ok) {
          throw new Error("Failed to fetch sites");
        }

        const data = await response.json();
        setSites(data);
      } catch (error) {
        console.error("Error fetching sites:", error);
      }
    };

    fetchSites();
  }, []);

  return (
    <div className="home">
      <h1>Home Page</h1>

      {sites.map(site => (
        <SiteCard key={site.id} site={site} />
      ))}
    </div>
  );
};

export default Home;