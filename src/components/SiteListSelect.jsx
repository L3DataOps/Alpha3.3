const SiteListSelect = ({ sites, selectedSite, setSelectedSite }) => {
  return (
    <select
      value={selectedSite}
      onChange={(e) => setSelectedSite(e.target.value)}
    >
      {sites.map((site) => (
        <option key={site.siteNumber} value={site.siteNumber}>
          {site.siteName}
        </option>
      ))}
    </select>
  );
};

export default SiteListSelect;
