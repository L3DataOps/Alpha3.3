import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

// pages & components
import Home from "./pages/Home";
import CreateCase from "./pages/CreateCase";
import CaseDetails from "./pages/CaseDetails";
import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";
import TabBar from "./components/TabBar";
import "./css/App.css";

function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <div className="App">
        
        {/* 👇 Only show when logged in */}
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