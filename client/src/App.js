import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Disclaimer from './components/Disclaimer';
import Context from './components/Context';
import Selectcompany from './components/Selectcompany';
import Selectfund from './components/Selectfund';
import Navbar from './components/Navbar';
import Individualfund from './components/individualfund'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/disclaimer" component={Disclaimer} />
            <Route path="/selection/company" component={Selectcompany} />
            <Route path="/fundlists/:company" component={Selectfund}/>
            <Route path="/individual/:id" component={Individualfund} />
            <Route path="/context" component={Context} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
