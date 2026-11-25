import { useState } from "react";
import { useIndex } from "../context/IndexContext";

export function Draggable({children}) {

  const {index, grabbing, setGrabbing} = useIndex();
  const defaultIndex = 0;
  const [isGrabbingMe, setGrabbingMe] = useState(false);
    //esse hook serve pra criar elementos arrastaveis
  const [pos, setPos] = useState(() => ({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  })); //cria basicamente o estado x e y do componente envolvido no wrap
  //declara se está arrastando ou n
  const handlePointerDown = (ev) => {
    ev.stopPropagation();
    setGrabbingMe(true); // impede o MainShell de iniciar o arraste
    setGrabbing(true);
    ev.currentTarget.setPointerCapture(ev.pointerId);
  };
  const handlePointerMove = (ev) => {
    if (!grabbing) return;
    
    setPos((prevPos) => ({
      x: prevPos.x + ev.movementX,
      y: prevPos.y + ev.movementY,
    }));
  };
  //depois que o mouse solta, is dragging é false
  const handlePointerUp = (ev) => {
    setGrabbingMe(false);
    setGrabbing(false);
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
          cursor: grabbing ? "grabbing" : "grab",
          userSelect: "none",
          zIndex: isGrabbingMe ? index : defaultIndex
        }}
        className="div-resizable hover-lift bg-primary bg-gradient p-3 rounded w-auto h-auto shadow"
      >
        {children}
      </div>
    </section>
  );
}
