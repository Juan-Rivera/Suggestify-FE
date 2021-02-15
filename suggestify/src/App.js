import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Register from './components/register/Register';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <h1> Suggestify </h1>
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/dashboard' component={Dashboard} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;