import { NoteWrapper } from "../styles";
// import UpdateButton from "./buttons/UpdateButton";
// import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

const NoteItem = (props) => {
  return (
    <div>
      <NoteWrapper>
        <Link to={`/notes/${props.note.slug}`}>
          <img alt={props.note.name} src={props.note.image} />
        </Link>
        <p>{props.note.name}</p>
        <p>{props.note.description}</p>
        {/* <UpdateButton perfume={props.perfume} />
        <DeleteButton perfumeId={props.perfume.id} /> */}
      </NoteWrapper>
    </div>
  );
};

export default observer(NoteItem);
