import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  `;

export const HomeLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 2em;
  color: white;
  text-decoration: none;
  background-color: palevioletred;
  transition: background-color 0.2s;
  &:hover {
    background-color: #d4547e;
  }
  &:last-child {
    background-color: skyblue;
    &:hover {
      background-color: #51b8e1;
    }
  }
  `;
