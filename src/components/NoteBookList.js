import { useState } from "react";
import notebookStore from "../stores/notebookStore";
import { observer } from "mobx-react";

import NoteBookItem from "./NoteBookItem";
import NoteBookModal from "./modals/NoteBookModal";
import { Title, NBListWrapper, AiFillPlusCircleStyled } from "../styles";

const NoteBookList = () => {
  const notebooksList = notebookStore.notebooks.map((notebook) => (
    <NoteBookItem notebook={notebook} key={notebook.id} />
  ));

  return (
    <div className="container">
      <Title>NoteBook</Title>
      {/* <AiFillPlusCircleStyled size="5em" onClick={openModal} /> */}
      <NBListWrapper>{notebooksList}</NBListWrapper>;
    </div>
  );
};

export default observer(NoteBookList);
