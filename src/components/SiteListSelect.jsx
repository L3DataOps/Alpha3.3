/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
*/

// This component renders a dropdown select element for choosing a site for the Create a Case section.
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
