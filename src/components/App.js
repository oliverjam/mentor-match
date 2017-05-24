import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Homepage from './Homepage';
import DevelopmentForm from './DevelopmentForm';
import ThankYouForm from './ThankYouForm';

import Timeline from './Timeline';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      goal: '',
      time: 0,
      submitted: false,
      todoInputValue: '',
      steps: Array.from({ length: 4 }, (item, i) => {
        return {
          id: i + 1,
          title: `Step ${i + 1}`,
          todos: [
            {
              id: i + 1,
              text: `Todo ${i + 1}`,
            },
          ],
        };
      }),
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleFormSubmit = ev => {
    ev.preventDefault();
    this.setState({ submitted: true });
  };

  handleFormInputChange = ev => {
    const name = ev.target.name;
    this.setState({ [name]: ev.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    const id = e.target.name - 1;
    const newSteps = [...this.state.steps];
    newSteps[id].todos = [
      ...this.state.steps[id].todos,
      { id: Date.now(), text: this.state.todoInputValue },
    ];
    this.setState({ todoInputValue: '', steps: newSteps });
    // Doesn't work? :(
    // this.setState({todoInputValue: '', steps[0].todos: todos});
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

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Homepage} />
          <Route
            exact
            path="/developmentForm"
            render={() =>
              this.state.submitted
                ? <Redirect to="/thankyou" />
                : <DevelopmentForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleFormInputChange={this.handleFormInputChange}
                  />}
          />
          <Route
            exact
            path="/thankyou"
            render={() => (
              <ThankYouForm
                category={this.state.category}
                goal={this.state.goal}
                time={this.state.time}
              />
            )}
          />

          <Route
            exact
            path="/timeline"
            render={() => <Timeline steps={this.state.steps} />}
          />
          <Route
            exact
            path="/step-:id"
            render={({ match }) => (
              <TodoList
                title={this.state.steps[match.params.id - 1].title}
                todos={this.state.steps[match.params.id - 1].todos}
                inputValue={this.state.todoInputValue}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                deleteItem={this.deleteItem}
                id={match.params.id}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
