import React, { createRef, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Todo from "./components/todo"
import './App.css';

function App() {

  return (
    <div className="App">
      <Router basename="/">
                <h1>Pense bête </h1>
                <Todo/>
            <Switch>
              <Route exact path="/">
              </Route>
            </Switch>
      </Router>
    </div>
  );
}

export default App;
