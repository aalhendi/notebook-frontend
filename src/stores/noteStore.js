import notes from "../data";
import { makeAutoObservable } from "mobx";
import axios from "axios";

class NoteStore {
  notes = notes;

  constructor() {
    makeAutoObservable(this);
  }

  fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/notes");
      this.notes = response.data;
    } catch (error) {
      console.log("fetchPerfumes: ", error);
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

  noteCreate = async (newNote) => {
    try {
      const formData = new FormData();
      for (const key in newNote) formData.append(key, newNote[key]);
      const response = await axios.post(
        "http://localhost:8000/notes",
        formData
      );
      this.notes.push(response.data);
    } catch (error) {
      console.log(error);
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

      // perfume.name = updatePerfume.name;
      // perfume.description = updatePerfume.description;
      // perfume.price = updatePerfume.price;
      // perfume.image = updatePerfume.image;
      // perfume.slug = slugify(updatePerfume.name);
    } catch (error) {
      console.log(error);
    }
  };
}

const noteStore = new NoteStore();
noteStore.fetchNotes();

export default noteStore;
