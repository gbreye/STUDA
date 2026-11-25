import { useState } from "react";
import Popup from "./Popup.jsx";
import { useZoom } from "./context/ZoomContext";


export function TaskBar() {
  const [isOpen, setIsOpen] = useState(false);
  const {zoom, setZoom} = useZoom();

  const handleClickPlus = () => {
    setZoom(Math.round((zoom + 0.1) * 10) / 10);
  }

  const handleClickMinus = () => {
    setZoom(Math.round((zoom - 0.1) * 10) / 10);
  }

  return (
    <nav className="navbar px-3 fixed-bottom">
      <Popup isOpen={isOpen}></Popup>
      <div className="container-fluid">
        <button type="button" className="btn btn-warning hover-lift" onClick={handleClickPlus}>
          +
        </button>
        <button type="button" className="btn btn-warning hover-lift" onClick={handleClickMinus}>
          -
        </button>
      </div>
    </nav>
  );
}
