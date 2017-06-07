import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Story from '../../pages/Story/Story';
import TopStories from '../../pages/TopStories/TopStories';


class Stories extends Component {
  render(){
    return(
      <div className="stories-wrapper">
        <div className="stories__top-stories-container">
          <Switch>
            <Route exact path="/stories" component={TopStories} />
            <Route path="/stories/:number" component={Story} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Stories;