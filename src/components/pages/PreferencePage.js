import React from 'react';
import { MainContent } from './../base/MainContent';
import PreferenceForm from '../PreferenceForm';

const PreferencePage = props => {
  return (
    <MainContent>
      <PreferenceForm
        handleFormSubmit={props.handleFormSubmit}
        handleFormInputChange={props.handleFormInputChange}
      />
    </MainContent>
  );
};

export default PreferencePage;
