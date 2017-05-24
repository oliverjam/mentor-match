import React from 'react';
import { MainContent } from './../base/MainContent';
import { LinkButton } from './../base/LinkButton';

const MatchPage = props => {
  return (
    <MainContent>
      <h1>Thank you for creating your development plan</h1>
      <p>We'll try to match you with a mentor, who will be in touch soon.</p>
      <LinkButton to="/timeline">Done</LinkButton>
    </MainContent>
  );
};

export default MatchPage;
