import React from 'react';
import { MainContent } from './../base/MainContent';
import TodoList from './../TodoList';

const TodoListPage = props => {
  return (
    <MainContent>
      <TodoList
        title={props.title}
        todos={props.todos}
        inputValue={props.todoInputValue}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
        deleteItem={props.deleteItem}
        id={props.id}
      />
    </MainContent>
  );
};

export default TodoListPage;
