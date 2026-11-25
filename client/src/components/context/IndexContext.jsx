import { createContext, useContext, useState } from "react";

const IndexContext = createContext(null);

export const IndexProvider = ({ children }) => {
  const [grabbing, setGrabbing] = useState(false);
    
  const index = grabbing ? 10 : 0;

  return (
    <IndexContext.Provider value={{ index, grabbing, setGrabbing }}>
      {children}
    </IndexContext.Provider>
  );
};

export const useIndex = () => useContext(IndexContext);
