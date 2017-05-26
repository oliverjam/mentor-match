import React from 'react';
import { TimelineList, TimelineItem, TimelineLink } from './base/Timeline';

function Timeline({ steps }) {
  return (
    <TimelineList>
      {steps.map(step => {
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

export default Timeline;
