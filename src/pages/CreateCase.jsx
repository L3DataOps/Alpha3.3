import SiteListSelect from "../components/SiteListSelect";
import EquipmentListSelect from "../components/EquipmentListSelect";
import CategoryListSelect from "../components/CategoryListSelect";
import InitialDescription from "../components/InitialDescription";
import SeverityListSelect from "../components/SeverityListSelect";
import TagListSelect from "../components/TagListSelect";
import "../css/CreateCase.css";
import { useEffect, useState } from "react";
import SubmitButton from "../components/SubmitButton";

const CreateCase = () => {
  // State for sites, selected site, and loading status
  const [sites, setSites] = useState([]);
  const [selectedSite, setSelectedSite] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedEquipment, setSelectedEquipment] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const selectedSiteData = sites.find((site) => site.siteName === selectedSite);

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

  useEffect(() => {
    if (!selectedEquipment) return;

    const fetchTags = async () => {
      try {
        const response = await fetch("/api/tags");
        const data = await response.json();

        const tagObj = data.find((t) => t.type === selectedEquipment.type);
        setTags(tagObj?.tags || []);
      } catch (error) {
        console.error(error);
        setTags([]);
      }
    };

    fetchTags();
  }, [selectedEquipment]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // remove `equipment` and keep the rest
    const { equipment, _id, ...siteDataWithoutEquipment } = selectedSiteData;

    const caseData = {
      ...siteDataWithoutEquipment, // all site fields except equipment
      caseEquipment: selectedEquipment,
      caseCategory: category,
      caseSeverity: severity,
      issueTags: selectedTags,
      initialDescription: description,
    };

    console.log(caseData);

    const response = await fetch("/api/cases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(caseData),
    });

    const data = await response.json();
    console.log("Case created:", data);

    // Reset form
    setSelectedSite("");
    setSelectedEquipment("");
    setCategory("");
    setSeverity("");
    setSelectedTags([]);
    setDescription("");
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
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

        {selectedSite && (
          <div>
            <h4>Select Equipment:</h4>
            <EquipmentListSelect
              equipment={equipment}
              selectedEquipment={selectedEquipment}
              setSelectedEquipment={setSelectedEquipment}
            />
          </div>
        )}

        {selectedEquipment && (
          <div>
            <h4>Category:</h4>
            <CategoryListSelect category={category} setCategory={setCategory} />
          </div>
        )}

        {category && (
          <div>
            <h4>Severity:</h4>
            <SeverityListSelect severity={severity} setSeverity={setSeverity} />
          </div>
        )}

        {severity && tags.length > 0 && (
          <div>
            <h4>Tags:</h4>
            <TagListSelect
              tags={tags}
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
            />
          </div>
        )}

        {selectedTags.length > 0 && (
          <div>
            <h4>Initial Description:</h4>
            <InitialDescription
              description={description}
              setDescription={setDescription}
            />
          </div>
        )}

        {description && <SubmitButton submitHandler={handleSubmit} />}
      </form>
    </div>
  );
};

export default CreateCase;
