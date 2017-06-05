import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return(
      <div className="navbar">
        <div className="navbar__wrapper">
          <div className="navbar__logo">
            <Link className="navbar__route-link--logo" to="/">catnews</Link>
          </div>
          <ul className="navbar__route-list">
            <li className="navbar__route-item">
              <Link className="navbar__route-link" to="/">Home</Link>
            </li>
            <li className="navbar__route-item">
              <Link className="navbar__route-link" to="/stories">Stories</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;