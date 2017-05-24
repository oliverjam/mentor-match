import React from 'react';
import { Link } from 'react-router-dom';

function TodoList({
  title,
  todos,
  inputValue,
  handleSubmit,
  handleChange,
  deleteItem,
  id,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              {todo.text}
              <button
                onClick={() => {
                  deleteItem(id, todo.id);
                }}
              >
                <svg
                  id="i-trash"
                  viewBox="0 0 32 32"
                  width="32"
                  height="32"
                  fill="none"
                  stroke="currentcolor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6" />
                </svg>

              </button>
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit} name={id}>
        <label htmlFor="addTodo">Add todo</label>
        <input
          onChange={handleChange}
          id="addTodo"
          type="text"
          value={inputValue}
        />
        <button type="submit">Add</button>
      </form>
      <Link to="/timeline">Done</Link>
    </div>
  );
}

export default TodoList;
