import React from 'react';

const Story = ({ match }) => {
  console.log(this.props)
  return (
    <div className="stories__story-item">
      <h1>Story</h1>
      <p>Params: {match.params.number}</p>
    </div>
  );
}

export default Story;