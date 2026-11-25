import { Title } from "./typhograpy/Title";
import { useState } from "react";
import Popup from "./Popup";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  }

  const openPopup = () => {
    setIsOpen(true);
  }
  return (
    <header className="navbar navbar-expand bg-gradient px-3 py-2 z-3">
      <div className="container-fluid">
        <Title title="studa." size="h1" fs="fs-6"/>
        
        <ul className="navbar-nav ms-auto mb-0">
          <li className="nav-item">
            <a className="nav-link active hover-lift" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link hover-lift" href="#" onClick={openPopup}>Apps</a>
          </li>
          <li className="nav-item">
            <a className="nav-link hover-lift" href="#" onClick={openPopup}>Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled hover-lift" aria-disabled="true">Settings</a>
          </li>
        </ul>
      </div>
      <Popup isOpen={isOpen} onClose={handleClose} Title={"Ops!"} Type={"Alert"} Content={"Essa função ainda não está pronta!"}></Popup>
    </header>
  );
}
