import { makeAutoObservable } from "mobx";
import axios from "axios";

class NoteStore {
  notes = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/notes");
      this.notes = response.data;
      this.loading = false;
    } catch (error) {
      console.log("fetchNotes: ", error);
    }
  };
  noteDelete = async (noteId) => {
    try {
      await axios.delete(`http://localhost:8000/notes/${noteId}`);
      const updatedNotes = this.notes.filter((note) => note.id !== noteId);
      this.notes = updatedNotes;
    } catch (error) {
      console.error(error);
    }
  };

  noteUpdate = async (updateNote) => {
    try {
      const formData = new FormData();
      for (const key in updateNote) formData.append(key, updateNote[key]);
      const response = await axios.put(
        `http://localhost:8000/notes/${updateNote.id}`,
        formData
      );
      const note = this.notes.find((note) => note.id === response.data.id);
      for (const key in note) note[key] = response.data[key]; //loop over the keys variable which are the attributes in each object at the array
    } catch (error) {
      console.log(error);
    }
  };
}

const noteStore = new NoteStore();
noteStore.fetchNotes();

export default noteStore;
