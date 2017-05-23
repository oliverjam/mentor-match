import React from 'react';
import { Link } from 'react-router-dom';

function TodoList({
  title,
  todos,
  inputValue,
  handleSubmit,
  handleChange,
  id,
}) {
  console.log(todos);
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {todos.map(todo => {
          return <li key={todo.id}>{todo.text}</li>;
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
