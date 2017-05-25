import React from 'react';
import { MainContent, MainTitle } from './../base/MainContent';
import Timeline from '../Timeline';

const TimelinePage = ({ steps, title }) => {
  return (
    <MainContent>
      <MainTitle>{title} Timeline</MainTitle>
      <p>Tap a step to plan your journey in more detail</p>
      <Timeline steps={steps} />
    </MainContent>
  );
};

export default TimelinePage;
