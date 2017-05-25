import React from 'react';
import { MainContent } from './../base/MainContent';
import Timeline from '../Timeline';

const TimelinePage = ({ steps }) => {
  return (
    <MainContent>
      <Timeline steps={steps} />
    </MainContent>
  );
};

export default TimelinePage;
