import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Home from '../Home/Home';
import About from '../About/About';
import NotFound from '../NotFound/NotFound';
import Story from '../Story/Story';
import Navbar from '../../components/Navbar/Navbar';

class App extends Component {
  render(){
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/about" component={About} />
          <Route path="/story" component={Story} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
