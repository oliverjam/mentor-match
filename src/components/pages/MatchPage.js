import React from 'react';
import { MainContent, MainTitle } from './../base/MainContent';
import { LinkButton } from './../base/LinkButton';

const MatchPage = props => {
  return (
    <MainContent>
      <MainTitle>Thank you for creating your development plan</MainTitle>
      <p>We'll try to match you with a mentor, who will be in touch soon.</p>
      <LinkButton to="/timeline">See plan</LinkButton>
    </MainContent>
  );
};

export default MatchPage;
