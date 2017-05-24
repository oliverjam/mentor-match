import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: 0.5em;
  }
  & > * + label {
    margin-top: 1.5em;
  }
`;

export const FormSelectWrapper = styled.div`
  position: relative;
  &::after{
    position: absolute;
    top: 50%;
    right: 1.25rem;
    display: inline-block;
    content: "";
    width: 0;
    height: 0;
    margin-top: -.15rem;
    pointer-events: none;
    border-top: .35rem solid;
    border-right: .35rem solid transparent;
    border-bottom: .35rem solid transparent;
    border-left: .35rem solid transparent;
  }
`;

export const FormSelect = styled.select`
  color: #777;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const FormInput = styled.input`
  `;

export const TextArea = styled.textarea`
    resize: vertical;
  `;
export const FormButton = styled.button`
  padding: 0.5em 0.75em;
  color: white;
  background-color: palevioletred;
  transition: background-color 0.2s;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #d4547e;
  }
  &:focus {
    outline: none;
  }
`;

// export const FormLink = styled(Link)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex: 1;
//   text-decoration: none;
//   color: black;
//   background: rgb(38, 235, 33);
// `;
