import React from 'react';

const Story = ({ allStories }) => {
  console.log('storyData=', allStories)
  return (
    <div className="stories__story-item">
      <h1>Story</h1>
    </div>
  );
}

export default Story;