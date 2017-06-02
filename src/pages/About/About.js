import React, { Component } from 'react';

class About extends Component {
  render() {
    const {...props} = this.props;
    return (
      <div {...props} >
        <p>About</p>
      </div>
    );
  }
}

export default About;
