
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


// pages & components
import Home from './pages/Home';


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
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
