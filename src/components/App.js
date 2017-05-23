import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Timeline from './Timeline';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

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

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Homepage} />
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
