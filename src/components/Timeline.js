import React from 'react';
import { Link } from 'react-router-dom';
import { TimelineList, TimelineItem, TimelineLink } from './base/Timeline';

function Timeline({ steps }) {
  return (
    <TimelineList>
      {steps.map(step => {
        return (
          <TimelineItem>
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

export default Timeline;
