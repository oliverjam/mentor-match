import styled, { keyframes } from 'styled-components';

export const LoadingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div`
  color: palevioletred;
  font-size: 11px;
  text-indent: -99999em;
  margin: 55px auto;
  position: relative;
  width: 10em;
  height: 10em;
  box-shadow: inset 0 0 0 1em;
  will-change: transform;
  border-radius: 50%;
  &::before,
  &::after {
    position: absolute;
    content: '';
  }
  &::before {
    width: 5.2em;
    height: 10.2em;
    background: white;
    border-radius: 10.2em 0 0 10.2em;
    top: -0.1em;
    left: -0.1em;
    transform-origin: 5.2em 5.1em;
    animation: ${loading} 2s infinite ease 1.5s;
  }
  &::after {
    width: 5.2em;
    height: 10.2em;
    background: white;
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 5.1em;
    transform-origin: 0px 5.1em;
    animation: ${loading} 2s infinite ease;
  }
`;
