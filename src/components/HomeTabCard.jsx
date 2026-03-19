/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
*/

//Global Imports
import "../css/CaseCard.css";

// This component renders the information about the site in the Case Details page.
const HomeTabCard = ({
  caseData: {
    region,
    network,
    county,
    towerOwner,
    defaultVendor,
    latitude,
    longitude,
  },
}) => {
  return (
    <div>
      <h3>
        Region:
        <br />
        {region}
      </h3>
      <p>
        Network:
        <br />
        {network}
      </p>
      <p>
        County:
        <br />
        {county}
      </p>
      <div className="across">
        <p>
          Owner:
          <br />
          {towerOwner}
        </p>
        <p>
          Latitude:
          <br /> {latitude}
        </p>
      </div>
      <div className="across">
        <p>
          Primary Vendor:
          <br /> {defaultVendor.name || "Not specified"}
        </p>
        <p>
          Longitude: <br /> {longitude}
        </p>
      </div>
    </div>
  );
};

export default HomeTabCard;
