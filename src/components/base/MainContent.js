import styled from 'styled-components';

export const MainContent = styled.main`
  max-width: 40em;
  margin: 0 auto;
  padding: 1em;
  & > * + * {
    margin-top: 1.5em;
  }
  @media (min-width: 40em) {
    padding: 2em;
  }
`;

export const MainTitle = styled.h1`
  text-transform: capitalize;
`;
