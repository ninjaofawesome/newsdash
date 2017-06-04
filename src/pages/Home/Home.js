import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import StoryData from '../../data/stories_data.json';
import Post from '../../components/Post/Post';
import Map from '../../components/Map/Map';
import SideBar from '../../components/Sidebar/Sidebar';

//todo: organize post by list, section
//make sidebar secition

class Home extends Component {
  render(){
    const allStories = StoryData.videos;
    return(
      <div className="home">
        <div className="home__post-container">
          <h2 className="home__post-list-title">Local</h2>
          <ul className="home__post-list">
            {allStories.map((item, index) =>{
              return(
                <Post
                  key={`homePost-${index}`}
                  className="home__post"
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
                  className="home__post"
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
                  className="home__post"
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
          {allStories.map((item, index) =>{
          // eslint-disable-next-line
          const main = (index === 0) ? true : false;
          // eslint-enable-next-line
            return(
              <Card
                key={`homeCard-${index}`}
                className="home__card"
                title={item.title}
                image={item.image}
                author={item.author}
                video={item.video}
                main
              />
            );
          })}
        </div>
        <div className="home__sidebar-container">
          <Map />
          <SideBar />
        </div>
      </div>
    );
  }
}

export default Home;