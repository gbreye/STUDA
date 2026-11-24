import {createContext, useContext, useState} from 'react';

//cria um contexto para o zoom, que pode ser usado em qualquer componente filho
const ZoomContext = createContext(null);


export const ZoomProvider = ({ children }) => {
  const [zoom, setZoom] = useState(1);
  return (
    <ZoomContext.Provider value={{ zoom, setZoom }}>
      {children}
    </ZoomContext.Provider>
  );
}

export const useZoom = () => useContext(ZoomContext);