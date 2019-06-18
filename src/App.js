import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import './components/launches';
import Landing from './components/launches';
import store from "./store";

const App = () =>  {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Landing}/>
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
