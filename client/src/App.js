import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Disclaimer from './components/Disclaimer';
import Context from './components/Context';
import Selection from './components/Selection';
import Data from './components/Data';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/disclaimer" component={Disclaimer} />
            <Route path="/selection" component={Selection} />
            <Route path="/context" component={Context} />
            <Route path="/data" component={Data} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
