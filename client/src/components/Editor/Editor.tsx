import "./Editor.css";

function Editor() {
  return (
    <section className="editor">
      <section className="codeinput">
        <h2>Input code</h2>
        <textarea className="textareacode" />
      </section>
      <section className="rendu">
        <h2>Rendu</h2>
        <textarea className="textarerendu" />
      </section>
    </section>
  );
}

export default Editor;
