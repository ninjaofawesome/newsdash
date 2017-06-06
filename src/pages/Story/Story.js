import React from 'react';
import StoryData from '../../data/stories_data.json';

function storyCopy(storyNum){
  const num = parseInt(storyNum, 10);
  const currentStory = StoryData.videos.map(story => {
    if (num === story.video) {
      console.log('match!');
      return story.copy
    } else {
      console.log('no match!')
      return null;
    }
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