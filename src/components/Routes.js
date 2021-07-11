import Home from "./Home";
import { Route, Switch } from "react-router";
import NoteList from "./NoteList";
import NoteBookList from "./NoteBookList";
import NoteBookDetail from "./NoteBookDetail";
import noteStore from "../stores/noteStore";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/notebooks/:notebookSlug/notes">
          <NoteBookDetail />
        </Route>
        <Route path="/notes">
          <NoteList notes={noteStore.notes} />
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
};

export default Routes;
