
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


// pages & components
import Home from './pages/Home';
import CreateCase from './pages/CreateCase';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Sidebar />
      

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
            
          </Routes>
        </div>
    </div>
       </BrowserRouter>
  );
}

export default App;
