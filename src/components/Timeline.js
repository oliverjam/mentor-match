import React from 'react';
import { Link } from 'react-router-dom';

function Timeline({ steps }) {
  return (
    <ol>
      {steps.map(step => {
        return (
          <li>
            <Link to={`/step-${step.id}`}>{step.title}</Link>
          </li>
        );
      })}
    </ol>
  );
}

export default Timeline;
