import "./App.css";
import NavBar from "./components/NavBar";
import notebookStore from "./stores/notebookStore";
import { observer } from "mobx-react";
import Routes from "./components/Routes";
import noteStore from "./stores/noteStore";

function App() {
  return (
    <div>
      <NavBar />
      {notebookStore.loading || noteStore.loading ? (
        <h1>Loading...</h1>
      ) : (
        <Routes />
      )}
    </div>
  );
}

export default observer(App);
