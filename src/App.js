import "./App.css";
import Home from "./components/Home";
import { Route, Switch } from "react-router";
import NoteList from "./components/NoteList";
import NoteBookList from "./components/NoteBookList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/notes">
          <NoteList />
        </Route>
        <Route path="/notebooks">
          <NoteBookList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
