import { useState } from "react";
import { Draggable } from "./hooks/Draggable";

export function Window({windowName}) {
  return (
    <Draggable>
        <div className="w-100">{windowName}</div>
    </Draggable>
  )
}
