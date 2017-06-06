import React from 'react';
import StoryData from '../../data/stories_data.json';

const storyCopy = (storyNum) => {
  const num = parseInt(storyNum, 10);
  const currentStory = StoryData.videos.map(story => {
    return (num === story.video) ? story.copy : null;
  })

  const matchingStory = currentStory.filter(item => { return item !== null }).toString();

  return {__html: matchingStory };
}

const Story = ({ match }) => {
  const storyNum = match.params.number;

  return (
    <div className="story">
      <div dangerouslySetInnerHTML={storyCopy(storyNum)}/>
    </div>
  );
}

export default Story;