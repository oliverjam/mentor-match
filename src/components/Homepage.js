import React from 'react';
import { MainContent } from './base/MainContent';
import { HomeContainer, HomeLink } from './base/Home';

const Homepage = props => {
  return (
    <HomeContainer>
      <HomeLink to="/mentor">Mentor</HomeLink>
      <HomeLink to="/timeline">Young Person</HomeLink>
    </HomeContainer>
  );
};

export default Homepage;
