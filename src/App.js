import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Destination from './components/Destination/Destination';
import RideDetails from './components/RideDetails/RideDetails';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RideCost from './components/RideCost/RideCost';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name: {loggedInUser.name}</p>
      <Router>
        <Switch>
          <Route path="/home">
            <div className="bg-image">
              <Header />
              <Home />
            </div>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/vehicle/:vehicleType">
            <RideDetails></RideDetails>
          </PrivateRoute>
          <Route path="/destination">
            <Destination></Destination>
          </Route>
          <Route path="/rideCost">
              <RideCost></RideCost>
          </Route>
          <Route exact path="/">
            <div className="bg-image">
              <Header />
              <Home />
            </div>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
