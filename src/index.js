/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
*/

//Global Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TabProvider } from "./context/TabContext.jsx";

// The entry point of the React application, rendering the App component wrapped in the TabProvider to provide tab management context to the entire application.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TabProvider>
      <App />
  </TabProvider>
  
  
);

