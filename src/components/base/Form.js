import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Form = styled.form`
  padding: 0.5em;
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  flex-direction: column;
  `;

export const Categories = styled.select`
  font-size: 1.5em;
  `;

export const DevelopmentInput = styled.input`
  flex: 1;
  margin: 1em;
  `;

export const TextArea = styled.input`
    flex: 7;
    margin: 1em;
  `;

export const FormLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    text-decoration: none;
    color: black;
    background: rgb(38, 235, 33);
    `;
