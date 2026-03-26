/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-26 : Marcos - Created HamburgerMenu component to be used in CaseDetails for closing cases.
-- 2026-03-26 : Marcos - Updated Hamburger menu to fetch case status and display "Case Closed" in the menu if the case is closed. Also, fixed an issue where the menu remained open after navigating to a different page.
--
*/

import { useState, useEffect } from "react";
import { useNavigate, useMatch, useLocation } from "react-router-dom";
import "../css/App.css";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const match = useMatch("/cases/:id");
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const isCasePage = !!match;
  const caseId = match?.params?.id;

  // Close the menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Fetch case status to determine if the "Close Case" option should be shown or if "Case Closed" should be displayed instead
  useEffect(() => {
    const fetchCaseStatus = async () => {
      if (!caseId) return;

      try {
        const response = await fetch(`/api/cases/${caseId}`);

        if (!response.ok) {
          return;
        }

        const data = await response.json();
        setIsOpen(data.isOpen);
      } catch (err) {
        console.error("Failed to fetch case status:", err);
      }
    };

    fetchCaseStatus();
  }, [caseId]);

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
          {isOpen ? (
            <button className="dropdown-item" onClick={handleCloseClick}>
              Close Case
            </button>
          ) : (
            <div className="dropdown-item disabled">Case Closed</div>
          )}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
