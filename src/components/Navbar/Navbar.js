import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return(
      <div className="navbar">
        <ul className="navbar__route-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/stories">Stories</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;