import React from 'react';
import { MainContent, MainTitle } from './../base/MainContent';
import Timeline from '../Timeline';

const TimelinePage = ({ steps, title, clearTodoInput }) => {
  return (
    <MainContent>
      <MainTitle>{title} Timeline</MainTitle>
      <p>Tap a step to plan your journey in more detail</p>
      <Timeline steps={steps} clearTodoInput={clearTodoInput} />
    </MainContent>
  );
};

export default TimelinePage;
