import { useState } from "react";
export function Draggable({children}) {

  const [pos, setPos] = useState(() => ({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  }));
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (ev) => {
    ev.stopPropagation(); // impede o MainShell de iniciar o arraste
    setIsDragging(true);
    ev.currentTarget.setPointerCapture(ev.pointerId);
  };
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
    <section>
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
        className="div-resizable hover-lift bg-primary bg-gradient p-3 rounded w-50 h-50 shadow"
      >
        {children}
      </div>
    </section>
  );
}
