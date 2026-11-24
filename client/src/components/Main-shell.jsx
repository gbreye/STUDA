import { use, useState } from "react";
import { Window } from "./Window";
import { useZoom } from "./context/ZoomContext";

export function MainShell() {
    //estados
    //basicamente posição e estado de verificação
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const handlePointerDown = (ev) => {
  setIsDragging(true);
  ev.currentTarget.setPointerCapture(ev.pointerId);
};
  const {zoom, setZoom} = useZoom();
  const handlePointerMove = (ev) => {
    if (!isDragging) return;

    setPos((prevPos) => ({
      x: prevPos.x + ev.movementX,
      y: prevPos.y + ev.movementY,
    }));
  };
  //depois que o mouse solta, is dragging é false
  const handlePointerUp = (ev) => {
    setIsDragging(false);
    ev.currentTarget.releasePointerCapture(ev.pointerId);
  };

  return (
    <div 
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        position: "absolute",
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
        width:"100vw",
        height:"100vh",
        zIndex: 0,
        scale: zoom,
      }}
      className="hover-lift"
    >
      <Window></Window>
    </div>
  );
}
