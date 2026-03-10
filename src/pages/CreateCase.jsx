import SiteListSelect from "../components/SiteListSelect";
import EquipmentListSelect from "../components/EquipmentListSelect";
import { useEffect, useState } from "react";

const CreateCase = () => {
  // State for sites, selected site, and loading status
  const [sites, setSites] = useState([]);
  const [selectedSite, setSelectedSite] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedEquipment, setSelectedEquipment] = useState("");

  const selectedSiteData = sites.find(
    (site) => site.siteNumber === selectedSite,
  );

  const equipment = selectedSiteData?.equipment || [];

  useEffect(() => {
    const fetchSites = async () => {
      try {
        const response = await fetch("/api/sites");

        if (!response.ok) {
          throw new Error("Failed to fetch sites");
        }

        const data = await response.json();
        setSites(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching sites:", error);
        setLoading(false);
      }
    };

    fetchSites();
  }, []);

  return (
    <div className="create">
      <form>
        <h2>Create a New Case</h2>
        <h4>Select Site:</h4>
        {loading ? (
          <p>Loading sites...</p>
        ) : (
          <SiteListSelect
            sites={sites}
            selectedSite={selectedSite}
            setSelectedSite={setSelectedSite}
          />
        )}

        <h4>Select Equipment:</h4>
        {selectedSite && (
          <EquipmentListSelect
            equipment={equipment}
            selectedEquipment={selectedEquipment}
            setSelectedEquipment={setSelectedEquipment}
          />
        )}
      </form>
    </div>
  );
};

export default CreateCase;
