import { observer } from "mobx-react";
import { useState } from "react";
import NoteModal from "./modals/NoteModal";
import { ListWrapper, AiFillPlusCircleStyled } from "../styles";
import NoteItem from "./NoteItem";
// import NoteModal from "./modals/NoteModal";
// import SearchBar from "./SearchBar";

const NoteList = ({ notes, notebookId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const notesList = notes?.map((note) => (
    <NoteItem note={note} key={note.id} />
  ));

  return (
    <div>
      {/* <SearchBar setQuerry={setQuerry} /> */}
      <AiFillPlusCircleStyled size="5em" onClick={openModal} />
      <NoteModal
        isOpen={isOpen}
        closeModal={closeModal}
        notebookId={notebookId}
      />
      <ListWrapper>{notesList}</ListWrapper>;
    </div>
  );
};

export default observer(NoteList);
