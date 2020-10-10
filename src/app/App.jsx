import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "../features/list/UserList";
import UserDetail from "../features/detail/UserDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <UserList></UserList>
        </Route>
        <Route path="/:userLogin">
          <UserDetail></UserDetail>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
