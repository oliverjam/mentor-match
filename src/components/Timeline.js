import React, { Component } from 'react';
import { TimelineList, TimelineItem, TimelineLink } from './base/Timeline';

class Timeline extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.clearTodoInput();
  }
  render() {
    return (
      <TimelineList>
        {this.props.steps.map(step => {
          return (
            <TimelineItem key={step.id}>
              <TimelineLink
                position={step.id % 2 === 0 ? 'right' : 'left'}
                to={`/step-${step.id}`}
              >
                {step.title}
              </TimelineLink>
            </TimelineItem>
          );
        })}
      </TimelineList>
    );
  }
}

export default Timeline;
