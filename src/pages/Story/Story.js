import React from 'react';
import StoryData from '../../data/stories_data.json';
import Card from '../../components/Card/Card';

const Story = ({ match }) => {
  const storyNum = match.params.number;
  const num = parseInt(storyNum, 10);
  const allStories = StoryData.videos;

  return (
    <div className="story">
      {allStories.map((item, index) => {
        return (num === item.video) ?
          <div className="story__wrapper" key={`story-${index}`}>
            <Card
              key={`storyCard-${index}`}
              className="story-card"
              title={item.title}
              image={item.image}
              story={true}
            />
            <div
              key={`storyCopy=${index}`}
              className="story__copy"
              dangerouslySetInnerHTML={{__html: item.copy}}
            />
          </div> : '';
      })}
    </div>
  );
}

export default Story;