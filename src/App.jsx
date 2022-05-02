import React from 'react'
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import NotFound from './components/NotFound'
import {
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="container">
      <div className="p-2 container">
        <Navbar />
      </div>
      <div className="container border border-dark p-5">
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route path='/admin' >
            Admin...
          </Route>
          <Route exact path="/home" component={Home} />
          <Route exact path='/' component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </div>

  );
}

export default App;
