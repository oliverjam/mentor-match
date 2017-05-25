import React from 'react';
import { MainContent, MainTitle } from './../base/MainContent';
import PreferenceForm from '../PreferenceForm';

const PreferencePage = props => {
  return (
    <MainContent>
      <MainTitle>Choose your mentor preferences</MainTitle>
      <PreferenceForm
        handleFormSubmit={props.handleFormSubmit}
        handleFormInputChange={props.handleFormInputChange}
      />
    </MainContent>
  );
};

export default PreferencePage;
