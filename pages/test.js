import React from "react";
import { Markdown } from "blocks/index";
import ContentEditable from "react-contenteditable";

function getSelectionText() {
  if (window) {
    var text = "";
    if (window.getSelection) {
      text = window.getSelection().toString();
    } else if (document.selection && document.selection.type !== "Control") {
      text = document.selection.createRange().text;
    }
    return text;
  }
}

const Test = () => {
  const [editorContent, setEditorContent] = React.useState("Content");
  const onChange = (ev) => {
    setEditorContent(ev.target.value);
  };

  console.log(editorContent);
  return (
    <div>
      <button
        onClick={() => {
          const selection = window.getSelection();
          const { baseOffset, focusOffset, focusNode } = selection;
        }}
      >
        Bold
      </button>
      <ContentEditable
        tagName="p"
        html={editorContent} // innerHTML of the editable div
        disabled={false} // use true to disable edition
        onChange={onChange} // handle innerHTML change
      />
    </div>
  );
};

export default Test;
