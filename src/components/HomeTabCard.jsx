import "../css/CaseCard.css";

const HomeTabCard = ({
  caseData: {
    siteName,
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
        {siteName}
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
