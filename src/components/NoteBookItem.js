import { observer } from "mobx-react";
import { NoteBookWrapper } from "../styles";
import { Link } from "react-router-dom";

const NoteBookItem = ({ notebook }) => {
  return (
    <>
      <NoteBookWrapper>
        <Link to={`/notebooks/${notebook.slug}/notes`}>
          <img
            alt={notebook.name}
            src={
              "https://image.shutterstock.com/image-vector/notebook-students-on-white-background-260nw-1445518124.jpg"
            }
          />
        </Link>
        <p>{notebook.name}</p>
      </NoteBookWrapper>
    </>
  );
};

export default observer(NoteBookItem);
