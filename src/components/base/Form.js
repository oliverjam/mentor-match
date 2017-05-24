import styled from 'styled-components';
import { buttonStyle } from './utils/button';
import { inputStyle } from './utils/input';

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
    content: "";
    position: absolute;
    top: 50%;
    right: 1.25em;
    display: inline-block;
    margin-top: -.15rem;
    width: 0;
    height: 0;
    pointer-events: none;
    color: #777;
    border-top: .35rem solid;
    border-right: .35rem solid transparent;
    border-bottom: .35rem solid transparent;
    border-left: .35rem solid transparent;
  }
`;

export const FormSelect = styled.select`
  ${inputStyle()};
  color: #777;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const FormInput = styled.input`
  ${inputStyle()};
`;

export const TextArea = styled.textarea`
  ${inputStyle()};
  resize: vertical;
`;
export const FormButton = styled.button`
  ${buttonStyle()};
`;
