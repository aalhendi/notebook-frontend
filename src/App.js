import "./App.css";
import Home from "./components/Home";
import { Route, Switch } from "react-router";
import NoteList from "./components/NoteList";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/notes">
          <NoteList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
