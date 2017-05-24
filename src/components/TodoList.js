import React from 'react';
import {
  Todos,
  TodosItem,
  TodosButton,
  TodosForm,
  TodosFormRow,
} from './base/TodoList.js';

import { LinkButton } from './base/LinkButton';
function TodoList({
  title,
  todos,
  inputValue,
  handleSubmit,
  handleChange,
  deleteItem,
  id,
  handleCheckboxChange,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <Todos>
        {todos.map(todo => {
          return (
            <TodosItem key={todo.id}>
              <input
                type="checkbox"
                onClick={() => {
                  handleCheckboxChange(id, todo.id);
                }}
              />
              {todo.text}
              <TodosButton
                onClick={() => {
                  deleteItem(id, todo.id);
                }}
              >
                <svg
                  class="i-trash"
                  viewBox="0 0 32 32"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentcolor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6" />
                </svg>

              </TodosButton>
            </TodosItem>
          );
        })}
      </Todos>
      <TodosForm onSubmit={handleSubmit} name={id}>
        <label htmlFor="addTodo">Add todo</label>
        <TodosFormRow>
          <input
            required
            onChange={handleChange}
            id="addTodo"
            type="text"
            value={inputValue}
          />
          <TodosButton type="submit">Add</TodosButton>
        </TodosFormRow>
      </TodosForm>
      <LinkButton to="/timeline">Done</LinkButton>
    </div>
  );
}

export default TodoList;
