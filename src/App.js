import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./layouts/navbar/Navbar";
import {Users, User, CreateUser} from "./pages";

function App() {
  return (
      <Router>
        <Navbar />

        <div className='container section'>
          <Switch>
            <Route path="/" exact>
              <Users />
            </Route>

            <Route path="/user/:id">
              <User />
            </Route>

            <Route path="/createuser">
              <CreateUser />
            </Route>

          </Switch>
        </div>
      </Router>
  );
}

export default App;
