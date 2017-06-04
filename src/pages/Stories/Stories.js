import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Story from '../Story/Story';
import StoryData from '../../data/stories_data.json';

class Stories extends Component {
  constructor(){
    super();
    this.listItems = this.listItems.bind(this);
  }


  listItems(allStories) {
    return allStories.map((video, index) => {
      return (
        <li className="stories__linked-item" key={`video-${index}`}><Link to={`/stories/${video.video}`} className="stories__link">{video.title}</Link></li>);
    });
  }

  render() {
    const allStories = StoryData.videos;


    return (
      <div className="stories">
        <h1> stories</h1>
        <ul className="stories__linked-list">
          {this.listItems(allStories)}
        </ul>

        <Switch>
          { allStories && (
            <Route path='/stories/:number' render={({ match }) => (
              <Story allStories={allStories.find( item => item.video === match.params.number )} /> )} />
          )}
        </Switch>
      </div>
    );
  }
}

export default Stories;