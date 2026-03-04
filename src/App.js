
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


// pages & components
import Home from './pages/Home';
import CreateCase from './pages/CreateCase';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

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
      </BrowserRouter>
    </div>
  );
}

export default App;
