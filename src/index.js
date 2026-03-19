import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TabProvider } from "./context/TabContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <AuthProvider>
  <TabProvider>
    <App />
  </TabProvider>
</AuthProvider>
);

