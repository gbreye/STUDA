import { useState } from "react";
import Popup from "./Popup.jsx";


export function TaskBar() {
  const [isOpen, setIsOpen] = useState(false);

  


  return (
    <nav className="navbar px-3 fixed-bottom">
      <Popup isOpen={isOpen}></Popup>
      <div className="container-fluid">
        <button type="button" className="btn btn-warning hover-lift">
          +
        </button>
        <button type="button" className="btn btn-warning hover-lift">
          -
        </button>
      </div>
    </nav>
  );
}
