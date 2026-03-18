import { Link } from "react-router-dom";
import "../css/Sidebar.css";
import logo from "../images/logo.png";
import CurrentDate from "./CurrentDate";
import CurrentTime from "./CurrentTime";

function Sidebar() {
  return (
    <div className="sidebar">
      <CurrentTime />
      <img src={logo} alt="Logo" className="logo" />
      <CurrentDate />

      <nav>
        <Link to="/">Open Cases</Link>
        <Link to="/create-case">Create Case</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
