import React from 'react';
import { MainContent, MainTitle } from './../base/MainContent';
import DevelopmentForm from '../DevelopmentForm';

const DevelopmentPage = props => {
  return (
    <MainContent>
      <MainTitle>Create your development plan</MainTitle>
      <DevelopmentForm
        handleFormSubmit={props.handleFormSubmit}
        handleFormInputChange={props.handleFormInputChange}
      />
    </MainContent>
  );
};

export default DevelopmentPage;
