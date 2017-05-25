import styled from 'styled-components';
import { buttonStyle } from './utils/button';

export const Todos = styled.ul`
  list-style-type: none;
  padding: 0;
  & > * + * {
    margin-top: 0.5em;
  }
`;

export const TodosItem = styled.li`
  display: flex;
  align-items: center;

`;

export const TodosForm = styled.form`
  margin-bottom: 1em;
  & > * + * {
    margin-top: 0.5em;
  }
`;

export const TodosAdd = styled.button`
  ${buttonStyle('secondary')};
`;

export const TodosDelete = styled.button`
  margin-left: auto;
`;

export const TodosFormRow = styled.div`
    display: flex;
    & > * + * {
      margin-left: 0.5em;
    }
  `;

export const TodosText = styled.p`
  margin-left: 1em;
`;

export const TodosCheckbox = styled.input`
  & + p {
     text-decoration: ${props => (props.checked ? 'line-through' : 'none')};
    }
`;
