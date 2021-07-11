import { makeAutoObservable } from "mobx";
import axios from "axios";

class NoteBookStore {
  notebooks = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchNoteBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/notebooks");
      this.notebooks = response.data;
      this.loading = false;
    } catch (error) {
      console.log("fetchNoteBooks: ", error);
    }
  };

  notebookCreate = async (newNoteBook) => {
    try {
      const formData = new FormData();
      for (const key in newNoteBook) formData.append(key, newNoteBook[key]);
      const response = await axios.post(
        "http://localhost:8000/notebooks",
        formData
      );
      this.notebooks.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}

const notebookStore = new NoteBookStore();
notebookStore.fetchNoteBooks();

export default notebookStore;
