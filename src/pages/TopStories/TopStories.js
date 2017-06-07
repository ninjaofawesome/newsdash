import React, { Component } from 'react';
import StoryData from '../../data/stories_data.json';
import Post from '../../components/Post/Post';
import Card from '../../components/Card/Card';
import SideBar from '../../components/Sidebar/Sidebar';
import Map from '../../components/Map/Map';

class TopStories extends Component {
  render(){
    const allStories = StoryData.videos;
    return(
      <div className="top-stories">
        <div className="top-stories__all-stories-container">
          <div className="top-stories__all-stories-card-wrapper">
            <Card
              className="top-stories-card"
              title={allStories[0].title}
              image={allStories[0].image}
              author={allStories[0].author}
              video={allStories[0].video}
              main={true}
            />
          </div>
          <div className="top-stories__all-stories-wrapper">
            <h2 className="top-stories__post-list-title">Breaking News</h2>
            <ul className="top-stories__post-list">
              {allStories.map((item, index) =>{
                return(
                  <Post
                    key={`storiesPost-${index}`}
                    className="post"
                    title={item.title}
                    author={item.author}
                    video={item.video}
                    section={item.section}
                  />
                );
              })}
            </ul>
          </div>
        </div>

        <div className="top-stories__more-content-container">
          <div className="top-stories__post-container">
            <div className="top-stories__stories-wrapper">
              <h2 className="top-stories__post-list-title">Local</h2>
              <ul className="top-stories__post-list">
                {allStories.map((item, index) =>{
                  return(
                    <Post
                      key={`topStoriesPost-${index}`}
                      className="post"
                      title={item.title}
                      author={item.author}
                      video={item.video}
                      section={item.section}
                      image={item.image}
                      listType="local"
                    />
                  );
                })}
              </ul>
            </div>
            <div className="top-stories__stories-wrapper">
              <h2 className="top-stories__post-list-title">National</h2>
              <ul className="top-stories__post-list">
                {allStories.map((item, index) =>{
                  return(
                    <Post
                      key={`topStoriesPost-${index}`}
                      className="post"
                      title={item.title}
                      author={item.author}
                      video={item.video}
                      section={item.section}
                      image={item.image}
                      listType="national"
                    />
                  );
                })}
              </ul>
            </div>
            <div className="top-stories__stories-wrapper">
              <h2 className="top-stories__post-list-title">Entertainment</h2>
              <ul className="top-stories__post-list">
                {allStories.map((item, index) =>{
                  return(
                    <Post
                      key={`topStoriesPost-${index}`}
                      className="post"
                      title={item.title}
                      author={item.author}
                      video={item.video}
                      section={item.section}
                      image={item.image}
                      listType="entertainment"
                    />
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="top-stories__sidebar-container">
            <Map />
            <SideBar />
          </div>
        </div>

      </div>
    )
  }
}

export default TopStories;