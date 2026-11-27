import { Draggable } from "./hooks/Draggable";
import { getNotes } from "./hooks/ParseJson";

export function Window({ windowName }) {
  const { htmlString, jsString } = getNotes();

  function HtmlRenderer({ htmlString }) {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  }
  return (
    <Draggable>
      <HtmlRenderer htmlString={htmlString} />
    </Draggable>
  );
}