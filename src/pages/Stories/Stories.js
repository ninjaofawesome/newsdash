import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Story from '../Story/Story';
import StoryData from '../../data/stories_data.json';
import Post from '../../components/Post/Post';

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
      <div className="stories-wrapper">
        <div className="stories__post-container">
          <h2 className="stories__post-list-title">Local</h2>
          <ul className="stories__post-list">
            {allStories.map((item, index) =>{
              return(
                <Post
                  key={`homePost-${index}`}
                  className="post"
                  title={item.title}
                  author={item.author}
                  video={item.video}
                  section={item.section}
                  listType="local"
                />
              );
            })}
          </ul>
          <h2 className="stories__post-list-title">National</h2>
          <ul className="stories__post-list">
            {allStories.map((item, index) =>{
              return(
                <Post
                  key={`homePost-${index}`}
                  className="post"
                  title={item.title}
                  author={item.author}
                  video={item.video}
                  section={item.section}
                  listType="national"
                />
              );
            })}
          </ul>
          <h2 className="stories__post-list-title">Entertainment</h2>
          <ul className="stories__post-list">
            {allStories.map((item, index) =>{
              return(
                <Post
                  key={`homePost-${index}`}
                  className="post"
                  title={item.title}
                  author={item.author}
                  video={item.video}
                  section={item.section}
                  listType="entertainment"
                />
              );
            })}
          </ul>
        </div>
        <Switch>
          <Route path="/stories/:number" component={Story} />
        </Switch>
      </div>
    );
  }
}

export default Stories;