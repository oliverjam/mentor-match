import React from 'react';
import { MainContent } from './../base/MainContent';
import TodoList from './../TodoList';

const TodoListPage = props => {
  return (
    <MainContent>
      <TodoList
        title={props.title}
        todos={props.todos}
        inputValue={props.inputValue}
        handleChange={props.handleChange}
        handleNewTodo={props.handleNewTodo}
        deleteItem={props.deleteItem}
        handleStepTitle={props.handleStepTitle}
        id={props.id}
        handleCheckboxChange={props.handleCheckboxChange}
      />
    </MainContent>
  );
};

export default TodoListPage;
