import { createContext, useContext, useState } from "react";

const TabContext = createContext();

export const TabProvider = ({ children }) => {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  const addTab = (tab) => {
    setTabs((prev) => {
      const exists = prev.find((t) => t.id === tab.id);
      if (exists) return prev;
      return [...prev, tab];
    });

    setActiveTab(tab.id);
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

  return (
    <TabContext.Provider
      value={{ tabs, activeTab, setActiveTab, addTab, closeTab }}
    >
      {children}
    </TabContext.Provider>
  );
};

export const useTabs = () => useContext(TabContext);
