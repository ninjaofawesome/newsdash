import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    const {...props} = this.props;
    return (
      <div className='not-found' {...props} >
        <p>Not found</p>
      </div>
    );
  }
}

export default NotFound;
