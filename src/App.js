/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
-- 2026-03-25 : Marcos - Created closed cases component to render closed cases and added route in App.js.
-- 2026-03-26 : Daniel - Added conditional css for the login page to remove sidebar offset 
*/

//Global Imports
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Home from "./pages/Home";
import CreateCase from "./pages/CreateCase";
import ClosedCases from "./pages/ClosedCases";
import CaseDetails from "./pages/CaseDetails";
import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";
import TabBar from "./components/TabBar";
import "./css/App.css";

// The main App component sets up the routing for the application using React Router. It includes a Sidebar and TabBar that are always visible, and defines routes for the Home page, Create Case page, and Case Details page. Each route checks if the user is authenticated and either renders the appropriate component or redirects to the login page if not authenticated.
function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <div className={`App ${user ? "with-sidebar" : "no-sidebar"}`}>
        {user && <Sidebar />}
        {user && <TabBar />}

        <div className="pages">
          <Routes>

            {/* 🔓 Public route */}
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />

            {/* 🔒 Protected routes */}
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />

            <Route
              path="/closed-cases"
              element={user ? <ClosedCases /> : <Navigate to="/login" />}
            />

            <Route
              path="/create-case"
              element={user ? <CreateCase /> : <Navigate to="/login" />}
            />

            <Route
              path="/cases/:id"
              element={user ? <CaseDetails /> : <Navigate to="/login" />}
            />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;