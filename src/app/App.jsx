import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Navigator from "../shared/component/Navigator";
import UserList from "../features/list/UserList";
import UserDetail from "../features/detail/UserDetail";

function App() {
  return (
    <Router>
      <Navigator />

      <Switch>
        <Route exact path="/">
          <UserList></UserList>
        </Route>
        <Route path="/:userName">
          <UserDetail></UserDetail>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
