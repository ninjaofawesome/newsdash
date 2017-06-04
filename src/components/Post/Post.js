import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Story from '../../pages/Story/Story';

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
        <li className={`${className}--list-item`}>
          <div className={`${className}--wrapper`}>
            <Link to={`/stories/${video}`} className={`${className}--pagelink`}>
              <div className={`${className}--title`}>{title}</div>
              <div className={`${className}--author`}>{section}: {author}</div>
            </Link>
            <Switch>
              <Route path="/stories/:number" component={Story} />
            </Switch>
          </div>
        </li>
      );
    }
    return null;
  }
}

export default Post;