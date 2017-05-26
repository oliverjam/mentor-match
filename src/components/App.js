import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import localforage from 'localforage';
import Homepage from './pages/Homepage';
import DevelopmentPage from './pages/DevelopmentPage';
import PreferencePage from './pages/PreferencePage';
import MatchPage from './pages/MatchPage';
import TimelinePage from './pages/TimelinePage';
import TodoListPage from './pages/TodoListPage';
// import { LoadingContainer, LoadingSpinner } from './base/Loading';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'programming',
      goal: '',
      time: null,
      planSubmitted: false,
      gender: 'no preference',
      age: 'no preference',
      preferenceSubmitted: false,
      todoInputValue: '',
      steps: [],
      todos: [],
    };
  }

  // componentDidMount() {
  //   localforage
  //     .keys()
  //     .then(keys => {
  //       return keys.reduce((acc, key) => {
  //         localforage.getItem(key).then(value => {
  //           acc[key] = value;
  //         });
  //         return acc;
  //       }, {});
  //     })
  //     .then(newState => {
  //       console.log(newState);
  //       this.setState({ ...newState });
  //     })
  //     .catch(err => console.log(err));
  // }

  componentWillMount() {
    localforage
      .keys()
      .then(keys => {
        return keys.map(key => {
          localforage.getItem(key).then(value => {
            this.setState({ [key]: value });
          });
        });
      })
      .then(() => {
        this.setState({ loaded: true });
      });
    // .catch(err => console.log(err));
  }

  handleFormSubmit = ev => {
    ev.preventDefault();
    const name = ev.target.name;
    this.setState({ [name]: true });
    this.handleSteps();

    localforage.setItem(name, true);
  };

  handleFormInputChange = ev => {
    const name = ev.target.name;
    this.setState({ [name]: ev.target.value });

    localforage.setItem(name, ev.target.value);
  };

  handleSteps = () => {
    const steps = Array.from(
      { length: parseInt(this.state.time, 10) },
      (item, i) => {
        return {
          id: i + 1,
          title: `Step ${i + 1}`,
        };
      }
    );
    this.setState({
      steps: steps,
    });
    localforage.setItem('steps', steps);
  };

  handleStepTitle = (id, ev) => {
    console.log(id, ev.target.value);
    const steps = [...this.state.steps].map(step => {
      if (step.id === parseInt(id)) {
        step.title = ev.target.value;
      }
      return step;
    });
    this.setState({ steps });
  };

  handleNewTodo = e => {
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
    localforage.setItem('todos', todos);
  };

  deleteItem = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos });
    localforage.setItem('todos', todos);
  };

  handleCheckboxChange = id => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) todo.checked = !todo.checked;
      return todo;
    });

    this.setState({ todos });
    localforage.setItem('todos', todos);
  };

  render() {
    if (!this.state.loaded) {
      return null;
    } else {
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
                      category={this.state.category}
                      goal={this.state.goal}
                      time={this.state.time}
                    />}
            />
            <Route
              exact
              path="/mentor-preference"
              render={() =>
                this.state.preferenceSubmitted
                  ? <Redirect to="/matching" />
                  : <PreferencePage
                      handleFormSubmit={this.handleFormSubmit}
                      handleFormInputChange={this.handleFormInputChange}
                      gender={this.state.gender}
                      age={this.state.age}
                    />}
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
                  // Stupid hack to ensure it doesn't throw when there's no title
                  title={
                    this.state.steps[match.params.id - 1]
                      ? this.state.steps[match.params.id - 1].title
                      : ''
                  }
                  // Stupid hack to ensure it only tries to render when there are actually todos
                  todos={this.state.todos.filter(todo => {
                    if (todo) return match.params.id - 1 === todo.stepId;
                    return false;
                  })}
                  inputValue={this.state.todoInputValue}
                  handleStepTitle={this.handleStepTitle}
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
}

export default App;
