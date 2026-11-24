import { useState } from "react";

export const useZoom = (initialZoom = 1) => {
  const [zoom, setZoom] = useState(initialZoom);

  const handleZoom = (newZoom) => {
    if (newZoom) {
      setZoom(newZoom);
    }
  };

  return { zoom, handleZoom };
};