import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./layouts/navbar/Navbar";
import {Users, User, CreateUser} from "./pages";
import UserContext from './context/UserContext'
import {fetchUsers} from "./services/usersServices";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers()
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
      <Router>
        <Navbar />

        <div className='container section'>
          <Switch>
            <UserContext.Provider value={{users, setUsers}}>

                <Route path="/" exact>
                  <Users />
                </Route>

                <Route path="/user/:id">
                  <User />
                </Route>

                <Route path="/createuser">
                  <CreateUser />
                </Route>

            </UserContext.Provider>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
