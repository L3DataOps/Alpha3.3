import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Atlas</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/create-case">Create Case</Link>
      </nav>
    </div>
  );
}

export default Sidebar;