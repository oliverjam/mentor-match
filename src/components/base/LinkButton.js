import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { buttonStyle } from './utils/button';

export const LinkButton = styled(Link)`
  text-decoration: none;
  ${buttonStyle()};
`;
