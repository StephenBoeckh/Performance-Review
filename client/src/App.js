import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Disclaimer from './components/Disclaimer';
import Context from './components/Context';
import Selection from './components/Selection';
import Data from './components/Data';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <h1>Performance Review</h1>
          </nav>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/disclaimer" component={Disclaimer} />
            <Route path="/selection" component={Selection} />
            <Route path="/:id" component={Data} />
            <Route path="/Context" component={Context} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
