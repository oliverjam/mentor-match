import styled from 'styled-components';

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

export const TodosButton = styled.button`
  ${/* ${buttonStyle()}; */ ''}
  margin-left: auto;
`;

export const TodosFormRow = styled.div`
    display: flex;
    & > * + * {
      margin-left: 0.5em;
    }
  `;
