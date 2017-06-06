import React, { Component } from 'react';
// import { Switch, Route } from 'react-router';
import StoryData from '../../data/stories_data.json';
import Card from '../Card/Card';
import Post from '../Post/Post';
// import Story from '../../pages/Story/Story';

class NewsStrip extends Component {
  render() {
    const allStories = StoryData.videos;
    return (
      <div className="strip__top-stories">

        <ul className="top-stories__post-list">
          {allStories.map((item, index) =>{
            return(
              <Post
                key={`homePost-${index}`}
                className="top-stories"
                title={item.title}
                author={item.author}
                video={item.video}
                section={item.section}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default NewsStrip;