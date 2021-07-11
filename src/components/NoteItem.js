import { NoteWrapper } from "../styles";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

const NoteItem = ({ note }) => {
  return (
    <div>
      <NoteWrapper>
        <Link to={`/notes/${note.slug}`}>
          <img
            alt={note.name}
            src={
              "https://static5.depositphotos.com/1040758/459/i/950/depositphotos_4597179-stock-photo-sticky-note.jpg"
            }
          />
        </Link>
        <p>{note.name}</p>
      </NoteWrapper>
    </div>
  );
};

export default observer(NoteItem);
