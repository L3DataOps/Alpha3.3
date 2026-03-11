const SiteListSelect = ({ sites, selectedSite, setSelectedSite }) => {
  return (
    <select
      value={selectedSite}
      onChange={(e) => setSelectedSite(e.target.value)}
    >
      <option value="">Select Site</option>

      {sites.map((site) => (
        <option key={site.siteNumber} value={site.siteName}>
          {site.siteName}
        </option>
      ))}
    </select>
  );
};

export default SiteListSelect;
