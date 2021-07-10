import Modal from "react-modal";
import { useState } from "react";

import { CreateButtonStyled } from "../../styles";
import notebookStore from "../../stores/notebookStore";

const NoteBookModal = (props) => {
  const [noteBook, setNoteBook] = useState({
    name: "",
  });

  const handleChange = (event) => {
    setNoteBook({ ...noteBook, [event.target.name]: event.target.value });
    console.log(noteBook);
  };

  //   const handleImage = (event) => {
  //     setNote({ ...note, image: event.target.files[0] });
  //   };

  // to submit new note then close

  const handleSubmit = (event) => {
    event.preventDefault();
    notebookStore.notebookCreate(noteBook);
    props.closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="noteBook Modal"
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
                value={noteBook.name}
              />
            </div>
          </div>

          <CreateButtonStyled>Add noteBook</CreateButtonStyled>
        </form>
      </Modal>
    </div>
  );
};

export default NoteBookModal;
