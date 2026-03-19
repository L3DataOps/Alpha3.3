/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Daniel - Added comment tracking
*/

//Global Imports
import SiteListSelect from "../components/SiteListSelect";
import EquipmentListSelect from "../components/EquipmentListSelect";
import CategoryListSelect from "../components/CategoryListSelect";
import InitialDescription from "../components/InitialDescription";
import SeverityListSelect from "../components/SeverityListSelect";
import TagListSelect from "../components/TagListSelect";
import "../css/CreateCase.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../components/SubmitButton";
import IssueTypeSelect from "../components/IssueTypeSelect";

const CreateCase = () => {
  // State for sites, selected site, loading, selected equipment, category, description, severity, tags, selected tags, issue type
  const [sites, setSites] = useState([]);
  const [selectedSite, setSelectedSite] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedEquipment, setSelectedEquipment] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [issueType, setIssueType] = useState("");

  //Updates user selected state
  const selectedSiteData = sites.find((site) => site.siteName === selectedSite);

  //Defines navigate OBJ for navigation
  const navigate = useNavigate();

  //Updates equipment state based on selected equipment
  const equipment = selectedSiteData?.equipment || [];

  // Fetch API call to grab all sites
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

  //Fetch API call to grab all tags associated with selected equipment
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

  //Function to create case once user submits
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Removes equipment array and _id and keeps the rest
    const { equipment, _id, ...siteDataWithoutEquipment } = selectedSiteData;

    // Assigns all the associated field for a case's creation
    const caseData = {
      ...siteDataWithoutEquipment,
      caseEquipment: selectedEquipment,
      caseCategory: category,
      caseSeverity: severity,
      issueType: issueType,
      issueTags: selectedTags,
      initialDescription: description,
      actionTaken: "Dispatched",
      bundledTickets: [],
    };

    //Logging for compile data
    console.log(caseData);

    //Calls POST request to create case in MongoDB
    const response = await fetch("/api/cases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(caseData),
    });

    //Awaits for data to generate
    const data = await response.json();

    //Logging Debug
    console.log("Case created:", data);

    //Navigates to case once created
    navigate(`/cases/${data.insertedId}`);

    // Reset form
    setSelectedSite("");
    setSelectedEquipment("");
    setCategory("");
    setSeverity("");
    setIssueType("");
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
            <h4>Issue Type:</h4>
            <IssueTypeSelect
              issueType={issueType}
              setIssueType={setIssueType}
            />
          </div>
        )}

        {issueType && (
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
