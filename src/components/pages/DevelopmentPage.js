import React from 'react';
import { MainContent } from './../base/MainContent';
import DevelopmentForm from '../DevelopmentForm';

const DevelopmentPage = props => {
  return (
    <MainContent>
      <DevelopmentForm
        handleFormSubmit={props.handleFormSubmit}
        handleFormInputChange={props.handleFormInputChange}
      />
    </MainContent>
  );
};

export default DevelopmentPage;
