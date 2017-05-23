import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Timeline extends Component {
  constructor() {
    super();
    this.state = {};
    this.state.steps = Array.from({ length: 4 }, (item, i) => {
      return {
        id: i + 1,
        title: `Step ${i + 1}`,
        todos: [],
      };
    });
  }

  render() {
    return (
      <ol>
        {this.state.steps.map(step => {
          return <li><Link to={`/${step.title}`}>{step.title}</Link></li>;
        })}
      </ol>
    );
  }
}

export default Timeline;
