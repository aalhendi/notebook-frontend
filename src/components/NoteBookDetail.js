import { Redirect, useParams } from "react-router";
import notebookStore from "../stores/notebookStore";
import { observer } from "mobx-react-lite";
import NoteList from "./NoteList";
const NoteBookDetail = () => {
  const notebookSlug = useParams().notebookSlug;
  const notebook = notebookStore.notebooks.find(
    (notebook) => notebook.slug === notebookSlug
  );

  //Check if notebook exists
  if (!notebook) {
    return <Redirect to="/notebooks" />;
  }

  const notes = notebook.note;

  return (
    <div>
      <NoteList notes={notes} notebookId={notebook.id} />
    </div>
  );
};

export default observer(NoteBookDetail);
