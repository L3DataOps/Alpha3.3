/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
*/

//Global Imports
import { Link } from "react-router-dom";
import "../css/Sidebar.css";
import logo from "../images/logo.png";
import CurrentDate from "./CurrentDate";
import CurrentTime from "./CurrentTime";

//Sidebar component that displays the current date, time, logo, and navigation links
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
