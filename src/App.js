import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import {First} from "./First.js";
import {Second} from "./Second.js";
import {Third} from "./Third.js";
import {Fourth} from "./Fourth.js";
import {Fifth} from "./Fifth.js";
import {Sixth} from "./Sixth.js";

import './App.css';

class App extends Component {
render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Route exact path="/" component={First} />
          <Route path="/second" component={Second} />
          <Route path="/third" component={Third} />
          <Route path="/fourth" component={Fourth} />
          <Route path="/fifth" component={Fifth} />
          <Route path="/sixth" component={Sixth} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
