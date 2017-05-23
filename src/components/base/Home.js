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
  `;
