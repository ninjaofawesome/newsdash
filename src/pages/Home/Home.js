import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Card from '../../components/Card/Card';
import StoryData from '../../data/stories_data.json';
import Post from '../../components/Post/Post';
import Map from '../../components/Map/Map';
import Story from '../../pages/Story/Story';
// import SideBar from '../../components/Sidebar/Sidebar';

//todo: get d3 sidebar working and in place

class Home extends Component {
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
          <Switch>
            <Route path="/stories/:number" component={Story} />
          </Switch>
        </div>
        <div className="home__top-stories-container">
          {allStories.map((item, index) =>{
            return(
              <Card
                key={`homeCard-${index}`}
                className="top-stories-card"
                title={item.title}
                image={item.image}
                author={item.author}
                video={item.video}
                main={(index === 0) ? true : false}
              />
            );
          })}
        </div>
        <div className="home__sidebar-container">
          <Map />
        </div>
      </div>
    );
  }
}

export default Home;