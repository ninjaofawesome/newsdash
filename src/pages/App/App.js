import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Home from '../Home/Home';
import About from '../About/About';
import NotFound from '../NotFound/NotFound';
import Stories from '../Stories/Stories';
import Navbar from '../../components/Navbar/Navbar';

class App extends Component {
  render(){
    return (
      <div className="app">
        <Navbar />
        <div className="body-content">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/about" component={About} />
            <Route path="/stories" component={Stories} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
