import Modal from "react-modal";
import { useState } from "react";

import { CreateButtonStyled } from "../../styles";
import noteStore from "../../stores/noteStore";

const NoteModal = ({ closeModal, isOpen, notebookId }) => {
  const [note, setNote] = useState({
    name: "",
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  //   const handleImage = (event) => {
  //     setNote({ ...note, image: event.target.files[0] });
  //   };

  // to submit new note then close

  const handleSubmit = (event) => {
    event.preventDefault();
    noteStore.noteCreate(note, notebookId);
    closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="note Modal"
        ariaHideApp={false}
      >
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-6">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="name"
                value={note.name}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="description"
                value={note.description}
              />
            </div>
          </div>

          <CreateButtonStyled>Add note</CreateButtonStyled>
        </form>
      </Modal>
    </div>
  );
};

export default NoteModal;
