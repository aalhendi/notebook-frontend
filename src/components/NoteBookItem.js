import { observer } from "mobx-react";
import { ShopItemImage, NoteBookWrapper } from "../styles";
import { Link } from "react-router-dom";

const NoteBookItem = (props) => {
  return (
    <>
      <NoteBookWrapper>
        <Link to={`/notebooks/${props.notebook.slug}`}>
          <img alt={props.notebook.name} src={props.notebook.image} />
        </Link>
        <p>{props.notebook.name}</p>
      </NoteBookWrapper>
    </>
  );
};

export default observer(NoteBookItem);
