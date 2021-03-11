import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Register from './components/register/Register';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';

import PrivateRoute from './utils/PrivateRoute'

function App() {
  return (
    <div className="App">
      <h1> Suggestify </h1>
      <Router >
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path='/dashboard' >
            <Dashboard />
          </PrivateRoute>

        </Switch>
      </Router>
    </div>
  );
}


export default App