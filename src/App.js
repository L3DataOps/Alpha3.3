/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
*/

//Global Imports
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import CreateCase from './pages/CreateCase';
import CaseDetails from './pages/CaseDetails';
import Sidebar from './components/Sidebar';
import TabBar from './components/TabBar';
import './css/App.css';

// The main App component sets up the routing for the application using React Router. It includes a Sidebar and TabBar that are always visible, and defines routes for the Home page, Create Case page, and Case Details page. Each route checks if the user is authenticated and either renders the appropriate component or redirects to the login page if not authenticated.
function App() {
  return (
    
      <BrowserRouter>
        <div className="App">
        <Sidebar />
        <TabBar />

        <div className="pages">
          <Routes>

            <Route 
              path="/" 
              element={true ? <Home /> : <Navigate to="/login" />} 
            />

            <Route 
              path="/create-case" 
              element={true ? <CreateCase /> : <Navigate to="/login" />} 
            />

            <Route 
              path="/cases/:id"
              element={true ? <CaseDetails /> : <Navigate to="/login" />}
            />

          </Routes>
        </div>

      </div>
    </BrowserRouter>
    
  );
}

export default App;