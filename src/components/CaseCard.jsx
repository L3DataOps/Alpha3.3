import { useTabs } from "../context/TabContext";
import { useNavigate } from "react-router-dom";
import TagBubble from "./TagBubble";
import "../css/Home.css";

const CaseCard = ({ cases }) => {
  const { addTab } = useTabs();
  const navigate = useNavigate();

  const handleOpen = () => {
    addTab({
      id: cases._id,
      title: cases.caseNumber,
      path: `/cases/${cases._id}`,
    });

    navigate(`/cases/${cases._id}`);
  };

  const formatElapsedTime = (dateString) => {
    const now = new Date();
    const past = new Date(dateString);

    let diff = Math.floor((now - past) / 1000); // seconds

    const units = [
      { label: "y", value: 60 * 60 * 24 * 365 },
      { label: "mo", value: 60 * 60 * 24 * 30 },
      { label: "d", value: 60 * 60 * 24 },
      { label: "h", value: 60 * 60 },
      { label: "min", value: 60 },
    ];

    const results = [];

    for (let unit of units) {
      const amount = Math.floor(diff / unit.value);
      if (amount > 0) {
        results.push(`${amount}${unit.label}`);
        diff -= amount * unit.value;
      }
      if (results.length === 2) break; // 👈 only keep 2 units
    }

    return results.length ? results.join(" ") : "0min";
  };

  const elapsedTime = formatElapsedTime(cases.createdAt);

  return (
    <div onClick={handleOpen} className="case-card-link">
      <div className="case-card">
        <div>
          <h4>{cases.caseEquipment.caseType}</h4>
          <h3>{cases.caseNumber}</h3>
        </div>
        <div>
          <p> {cases.siteNumber}</p>
          <p> {cases.siteName}</p>
        </div>
        <div>
          <p> {elapsedTime}</p>
        </div>
        <div>
          <p> Status:</p>
          <p> {cases.actionTaken}</p>
        </div>
        <div>
          <p> {cases.caseEquipment.equipmentName}</p>
        </div>
        <div className="containerTags">
          <p>
            {cases.issueTags.map((tag, index) => (
              <TagBubble key={index} tag={tag} />
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
