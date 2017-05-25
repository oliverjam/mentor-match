import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Homepage from './pages/Homepage';
import DevelopmentPage from './pages/DevelopmentPage';
import PreferencePage from './pages/PreferencePage';
import MatchPage from './pages/MatchPage';
import TimelinePage from './pages/TimelinePage';
import TodoListPage from './pages/TodoListPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      goal: '',
      time: 0,
      planSubmitted: false,
      preferenceSubmitted: false,
      todoInputValue: '',
      steps: [],
      todos: [],
    };
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleFormSubmit = ev => {
    ev.preventDefault();
    const name = ev.target.name;
    this.setState({ [name]: true });
    this.handleSteps();
  };

  handleFormInputChange = ev => {
    const name = ev.target.name;
    this.setState({ [name]: ev.target.value });
  };

  handleSteps = () => {
    this.setState({
      steps: Array.from(
        { length: parseInt(this.state.time, 10) },
        (item, i) => {
          return {
            id: i + 1,
            title: `Step ${i + 1}`,
          };
        }
      ),
    });
  };

  handleNewTodo(e) {
    e.preventDefault();
    const stepId = e.target.name - 1;
    const todos = [
      ...this.state.todos,
      {
        text: this.state.todoInputValue,
        id: Date.now(),
        stepId,
        checked: false,
      },
    ];
    this.setState({ todoInputValue: '', todos });
  }

  deleteItem(id) {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos });
  }

  handleCheckboxChange(id) {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) todo.checked = !todo.checked;
      return todo;
    });

    this.setState({ todos });
  }

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() =>
              this.state.preferenceSubmitted
                ? <Redirect to="/timeline" />
                : <Homepage />}
          />
          <Route
            exact
            path="/create-plan"
            render={() =>
              this.state.planSubmitted
                ? <Redirect to="/mentor-preference" />
                : <DevelopmentPage
                    handleFormSubmit={this.handleFormSubmit}
                    handleFormInputChange={this.handleFormInputChange}
                  />}
          />
          <Route
            exact
            path="/mentor-preference"
            render={() =>
              this.state.preferenceSubmitted
                ? <Redirect to="/matching" />
                : <PreferencePage handleFormSubmit={this.handleFormSubmit} />}
          />

          <Route exact path="/matching" component={MatchPage} />

          <Route
            exact
            path="/timeline"
            render={() => (
              <TimelinePage
                steps={this.state.steps}
                title={this.state.category}
              />
            )}
          />
          <Route
            exact
            path="/step-:id"
            render={({ match }) => (
              <TodoListPage
                title={this.state.steps[match.params.id - 1].title}
                // Stupid hack to ensure it only tries to render when there are actually todos
                todos={this.state.todos.filter(todo => {
                  if (todo) return match.params.id - 1 === todo.stepId;
                  return false;
                })}
                inputValue={this.state.todoInputValue}
                handleChange={this.handleFormInputChange}
                handleNewTodo={this.handleNewTodo}
                deleteItem={this.deleteItem}
                id={match.params.id}
                handleCheckboxChange={this.handleCheckboxChange}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
