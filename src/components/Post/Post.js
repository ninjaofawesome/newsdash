import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
  render() {
    const {
      className,
      title,
      author,
      video,
      section,
      listType
    } = this.props;

    const formattedSection = section.toLowerCase();

    if (formattedSection === listType) {
      return (
        <li className={`${className}__list-item`}>
          <Link to={`/stories/${video}`} className={`${className}__page-link`}>
            <div className={`${className}__title`}>{title}</div>
            <div className={`${className}__author`}>{section}: {author}</div>
          </Link>
        </li>
      );
    }
    return null;
  }
}

export default Post;