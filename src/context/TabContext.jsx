/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
*/

//Global Imports
import { createContext, useContext, useState } from "react";

// This context manages the state of open tabs in the application, allowing components to add, switch, and close tabs while keeping track of the active tab.
const TabContext = createContext();

export const TabProvider = ({ children }) => {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  const addTab = (tab) => {
    setTabs((prev) => {
      const exists = prev.some((t) => t.id === tab.id);

      const updatedTabs = exists ? prev : [...prev, tab];

      setActiveTab(tab.id);

      return updatedTabs;
    });
  };

  const closeTab = (id) => {
    setTabs((prev) => {
      const updated = prev.filter((t) => t.id !== id);

      if (id === activeTab && updated.length > 0) {
        setActiveTab(updated[updated.length - 1].id);
      }

      return updated;
    });
  };

  // Render the TabContext provider with the current tabs, active tab, and functions to add and close tabs, making this state accessible to any child components that consume the context.
  return (
    <TabContext.Provider
      value={{ tabs, activeTab, setActiveTab, addTab, closeTab }}
    >
      {children}
    </TabContext.Provider>
  );
};

export const useTabs = () => useContext(TabContext);
