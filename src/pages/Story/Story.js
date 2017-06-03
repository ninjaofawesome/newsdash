import React from 'react';

const Story = ({ storyData }) => {
  console.log('storyData=', storyData)
  return (
    <div className="stories__story-item">
      <h1>Story</h1>
    </div>
  );
}

export default Story;