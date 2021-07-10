import Modal from "react-modal";
import { useState } from "react";

import { CreateButtonStyled } from "../../styles";
import noteStore from "../../stores/noteStore";

const NoteModal = (props) => {
  const [note, setNote] = useState(
    props.previousNote
      ? props.previousNote
      : {
          name: "",
          description: "",
          image: "",
        }
  );

  const handleChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
    console.log(note);
  };

  //   const handleImage = (event) => {
  //     setNote({ ...note, image: event.target.files[0] });
  //   };

  // to submit new note then close

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.previousNote) noteStore.noteUpdate(note);
    else noteStore.noteCreate(note);
    props.closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="note Modal"
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
          <div className="form-group">
            <label>Image</label>
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="image"
            />
          </div>
          <CreateButtonStyled>
            {props.previousNote ? "update" : "Add"} note
          </CreateButtonStyled>
        </form>
      </Modal>
    </div>
  );
};

export default NoteModal;
