
import { useState } from 'react';
import { Popup } from "../components/Popup"

export const ShowPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Popup</button>
      
      {isOpen && (
        <Popup onClose={() => setIsOpen(false)} />
      )}
    </div>
  );
};