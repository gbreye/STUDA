import { useState } from "react";

export function MainShell() {
    //estados
    //basicamente posição e estado de verificação
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (ev) => {
    setIsDragging(true);
    ev.currentTarget.setPointerCapture(ev.pointerId);
  };
  //coloca o estado e o x,y do elemento para o arrastamento do mouse
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
      }}
      className="hover-lift"
    >
      Element position: X = {pos.x}, Y = {pos.y}
    </div>
  );
}
