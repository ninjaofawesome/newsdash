import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import StoryData from '../../data/stories_data.json';
import Post from '../../components/Post/Post';
import Story from '../../pages/Story/Story';
import TopStories from '../../pages/TopStories/TopStories';


class Stories extends Component {
  render(){
    const allStories = StoryData.videos;
    return(
      <div className="home-wrapper">
        <div className="home__post-container">
          <h2 className="home__post-list-title">Local</h2>
          <ul className="home__post-list">
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
          <h2 className="home__post-list-title">National</h2>
          <ul className="home__post-list">
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
          <h2 className="home__post-list-title">Entertainment</h2>
          <ul className="home__post-list">
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
        <div className="home__top-stories-container">
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