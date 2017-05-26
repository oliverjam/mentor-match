import React from 'react';
import {
  Todos,
  TodosItem,
  TodosAdd,
  TodosDelete,
  TodosForm,
  TodosFormRow,
  TodosText,
  TodosCheckbox,
  TodosTitle,
  TodosTitleInput,
} from './base/TodoList.js';
import { FormInput } from './base/Form';
import { LinkButton } from './base/LinkButton';

function TodoList({
  title,
  todos,
  inputValue,
  handleNewTodo,
  handleChange,
  deleteItem,
  id,
  handleCheckboxChange,
  handleStepTitle,
}) {
  return (
    <div>
      <TodosTitle>
        <TodosTitleInput
          onChange={handleStepTitle.bind(this, id)}
          value={title}
          type="text"
        />
      </TodosTitle>
      <Todos>
        {todos.map(todo => {
          return (
            <TodosItem key={todo.id}>
              <TodosCheckbox
                type="checkbox"
                checked={todo.checked}
                onChange={() => {
                  handleCheckboxChange(todo.id);
                }}
              />
              <TodosText>{todo.text}</TodosText>
              <TodosDelete
                onClick={() => {
                  deleteItem(todo.id);
                }}
              >
                <svg
                  viewBox="0 0 32 32"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentcolor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6" />
                </svg>

              </TodosDelete>
            </TodosItem>
          );
        })}
      </Todos>
      <TodosForm autoComplete="off" onSubmit={handleNewTodo} name={id}>
        <label htmlFor="addTodo">Add todo</label>
        <TodosFormRow>
          <FormInput
            required
            name="todoInputValue"
            onChange={handleChange}
            id="addTodo"
            type="text"
            value={inputValue}
          />
          <TodosAdd type="submit">Add</TodosAdd>
        </TodosFormRow>
      </TodosForm>
      <LinkButton to="/timeline">Done</LinkButton>
    </div>
  );
}

export default TodoList;
