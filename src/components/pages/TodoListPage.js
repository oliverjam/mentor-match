import React from 'react';
import { MainContent } from './../base/MainContent';
import TodoList from './../TodoList';

const TodoListPage = props => {
  console.log(props);

  return (
    <MainContent>
      <TodoList
        title={props.title}
        todos={props.todos}
        inputValue={props.inputValue}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
        deleteItem={props.deleteItem}
        id={props.id}
        handleCheckboxChange={props.handleCheckboxChange}
      />
    </MainContent>
  );
};

export default TodoListPage;
