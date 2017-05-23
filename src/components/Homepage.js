import React from 'react';
import { HomeContainer, HomeLink } from './base/Home';

const Homepage = props => {
  return (
    <HomeContainer>
      <HomeLink to="/timeline">Mentor</HomeLink>
      <HomeLink to="/developmentForm">Young Person</HomeLink>
    </HomeContainer>
  );
};

export default Homepage;
