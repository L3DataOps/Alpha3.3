/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-26 : Marcos - Created HamburgerMenu component to be used in CaseDetails for closing cases.
*/

import { useState } from "react";
import { useNavigate, useMatch } from "react-router-dom";
import "../css/App.css";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const match = useMatch("/cases/:id");

  const isCasePage = !!match;
  const caseId = match?.params?.id;

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleCloseClick = async () => {
    if (!caseId) return;

    const confirmed = window.confirm(
      "Are you sure you want to close this case?",
    );
    if (!confirmed) return;

    try {
      const response = await fetch(`/api/cases/${caseId}/close`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const text = await response.text();
        console.error("Error closing case:", text);
        return;
      }

      setMenuOpen(false);
      navigate("/");
    } catch (err) {
      console.error("Close case failed:", err);
    }
  };

  if (!isCasePage) return null;

  return (
    <div className="hamburger-menu-wrapper">
      <button className="hamburger-button" onClick={handleToggleMenu}>
        ☰
      </button>

      {menuOpen && (
        <div className="hamburger-dropdown">
          <button className="dropdown-item" onClick={handleCloseClick}>
            Close Case
          </button>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
