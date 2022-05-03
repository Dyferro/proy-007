import {
  Switch,
  Route
} from "react-router-dom";

import React from 'react'
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import NotFound from './components/NotFound'
import Admin from './components/Admin';
import { auth } from './firebase';


function App() {

  const [firebaseUser, setFirebaseUser] = React.useState(false);

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log('Usuario activo: ')
      console.log(user)
      if (user) {
        setFirebaseUser(user)
      } else {
        setFirebaseUser(null)
      }
    })
  }, [])

  return firebaseUser !== false ? (
    <div className="container">
      <div className="p-2 container">
        <Navbar firebaseUser={firebaseUser} />
      </div>
      <div className="container border border-dark p-5">
        <Switch>

          <Route path='/login' component={Login} />
          <Route path='/admin' component={Admin} />
          <Route path='/home' component={Home} />
          <Route path='/' component={Home} />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    </div>
  ) : (
    <div>Cargando...</div>
  )
}

export default App;
