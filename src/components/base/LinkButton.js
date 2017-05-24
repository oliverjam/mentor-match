import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkButton = styled(Link)`
  display: inline-block;
  padding: 0.5em 1em;
  color: white;
  background-color: palevioletred;
  border-radius: 2px;
  text-decoration: none;
  transition: background-color 0.2s;
  &:hover,
  &:focus {
    background-color: #d4547e;
  }
  &:focus {
    outline: none;
  }
`;
