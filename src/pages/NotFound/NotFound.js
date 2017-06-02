import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    const {
      className,
      ...props
    } = this.props;
    return (
      <div className={className} {...props} >
        <p>Not found</p>
      </div>
    );
  }
}

export default NotFound;
