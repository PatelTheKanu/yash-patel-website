import React, { createContext, useContext, useState } from 'react';

interface ActiveSectionContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const ActiveSectionContext = createContext<ActiveSectionContextType>({
  activeSection: '',
  setActiveSection: (section: string) => {
    throw new Error('ActiveSectionContext not initialized');
  },
});

export const useActiveSection = () => useContext(ActiveSectionContext);

export const ActiveSectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState('');

  const handleSetActiveSection = (section: string) => {
    console.log('Setting active section:', section);
    setActiveSection(section);
  };

  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, setActiveSection: handleSetActiveSection }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};
