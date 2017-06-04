import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import StoryData from '../../data/stories_data.json';
import Post from '../../components/Post/Post';
import SideBar from '../../components/Sidebar/Sidebar';

//todo: organize post by list, section
//make sidebar secition
class Home extends Component {
  render(){
    const allStories = StoryData.videos;
    return(
      <div className="home">
        <div className="home__post-container">
          {allStories.map((item, index) =>{
            return(
              <Post
                key={`homePost-${index}`}
                className="home__post"
                title={item.title}
                author={item.author}
                video={item.video}
                section={item.section}
              />
            );
          })}

        </div>
        <div className="home__top-stories-container">
          {allStories.map((item, index) =>{
            const main = (index === 0) ? true : false;
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
          <SideBar />
        </div>
      </div>
    );
  }
}

export default Home;