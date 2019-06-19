import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import './components/launches';
import Landing from './components/launches';

const App = () =>  {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing}/>
      </Switch>
    </Router>
  );
}

export default App;
