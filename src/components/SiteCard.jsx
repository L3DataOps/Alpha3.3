const SiteCard = ({ site }) => {
    return (
        <div className="site-card">
            <h2>{site.siteName}</h2>
            <p>Site Number: {site.siteNumber}</p>
            <p>Network: {site.network}</p>
            <p>{site.city}, {site.state}</p>
            <p>Vendor: {site.defaultVendor.name} ({site.defaultVendor.phone})</p>
        </div>
    );
};

export default SiteCard;