import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TimelineList = styled.ol`
  position: relative;
  width: 100%;
  list-style: none;
  padding: 0;
  & > * + * {
    margin-top: 2em;
  }
  &::after {
    content: '';
    position: absolute;
    left: calc(50% - 3px);
    top: 1.125em;
    width: 6px;
    height: calc(100% - 2.25em);
    background-color: #ccc;
  }
`;

export const TimelineItem = styled.li`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
    width: 1em;
    height: 1em;
    background-color: #ccc;
    border-radius: 50%;
  }
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const TimelineLink = styled(Link)`
  display: block;
  position: relative;
  padding: 0.75em;
  width: 40%;
  text-align: right;
  color: white;
  background-color: palevioletred;
  border-radius: 2px;
  float: ${props => (props.position === 'right' ? 'right' : 'none')};
  text-align: ${props => (props.position === 'right' ? 'left' : 'right')};
  &::after {
    content: '';
    position: absolute;
    top: calc(50% - 0.5em);
    right: ${props => (props.position === 'right' ? 'auto' : '-0.45em')};
    left: ${props => (props.position === 'right' ? '-0.45em' : 'auto')};
    width: 1em;
    height: 1em;
    background-color: inherit;
    transform: rotate(45deg);
    border-radius: 2px;
  }
  @media (min-width: 30em) {
    width: 45%;
    font-size: 1.125em;
  }
`;
