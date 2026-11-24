import { useState } from "react";
import Popup from "./Popup.jsx";
import { useZoom } from "./context/ZoomContext";


export function TaskBar() {
  const [isOpen, setIsOpen] = useState(false);
  const {zoom, setZoom} = useZoom();

  const handleClick = () => {
    setZoom(zoom += 0.1);
  }

  return (
    <nav className="navbar px-3 fixed-bottom">
      <Popup isOpen={isOpen}></Popup>
      <div className="container-fluid">
        <button type="button" className="btn btn-warning hover-lift" onClick={handleClick}>
          +
        </button>
        <button type="button" className="btn btn-warning hover-lift">
          -
        </button>
      </div>
    </nav>
  );
}
