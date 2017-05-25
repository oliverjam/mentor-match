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
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
      steps: Array.from({ length: parseInt(this.state.time) }, (item, i) => {
        return {
          id: i + 1,
          title: `Step ${i + 1}`,
          todos: [
            {
              id: i + 1,
              text: `Todo ${i + 1}`,
              checked: false,
            },
          ],
        };
      }),
    });
  };
  handleSubmit(e) {
    e.preventDefault();
    const id = e.target.name - 1;
    const newSteps = [...this.state.steps];
    newSteps[id].todos = [
      ...this.state.steps[id].todos,
      { id: Date.now(), text: this.state.todoInputValue, checked: false },
    ];
    this.setState({ todoInputValue: '', steps: newSteps });
  }

  handleChange(e) {
    const todoInputValue = e.target.value;
    this.setState({ todoInputValue });
  }

  deleteItem(stepId, todoId) {
    const deletedItemList = [...this.state.steps];
    deletedItemList[stepId - 1].todos = deletedItemList[
      stepId - 1
    ].todos.filter(todos => {
      return todos.id !== todoId;
    });
    this.setState({ steps: deletedItemList });
  }

  handleCheckboxChange(stepId, todoId) {
    const newCheckboxList = [...this.state.steps];

    newCheckboxList[stepId - 1].todos.forEach(todos => {
      if (todos.id === todoId) todos.checked = !todos.checked;
    });
    this.setState({ steps: newCheckboxList });
    console.log(this.state);
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
                todos={this.state.steps[match.params.id - 1].todos}
                inputValue={this.state.todoInputValue}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
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
