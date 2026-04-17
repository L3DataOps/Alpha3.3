/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
-- 2026-03-24 : Added Auth context to render logged user's Name
-- 2026-03-25 : Marcos - Added link to closed cases.
*/

//Global Imports
import { Link } from "react-router-dom";
import "../css/Sidebar.css";
import logo from "../images/logo.png";
import CurrentDate from "./CurrentDate";
import CurrentTime from "./CurrentTime";
import { useAuth } from "../context/AuthContext";

//Sidebar component that displays the current date, time, logo, and navigation links
function Sidebar() {
  const { user, logout } = useAuth();

  console.log(user);
  return (
    <div className="sidebar">
      <CurrentTime />
      <img src={logo} alt="Logo" className="logo" />
      <CurrentDate />

      <nav>
        <Link to="/">Open Cases</Link>
        <Link to="/closed-cases">Closed Cases</Link>
        <Link to="/create-case">Create Case</Link>
        <Link to="/rnm-dashboard">RNM Dashboard</Link>
      </nav>

      <div className="settings">
        <br />
        <br />
        <h3>
          Welcome, <br />
        </h3>
        <h2>
          {user?.firstname} {user?.lastname}
        </h2>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Sidebar;
