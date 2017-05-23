import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Homepage from './Homepage';
import DevelopmentForm from './DevelopmentForm';
import ThankYouForm from './ThankYouForm';
import './../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      goal: '',
      time: 0,
      submitted: false,
    };
  }

  handleFormSubmit = ev => {
    ev.preventDefault();
    this.setState({ submitted: true });
  };

  handleFormInputChange = ev => {
    const name = ev.target.name;
    this.setState({ [name]: ev.target.value });
  };

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Homepage} test="Samatar" />
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
        </div>
      </Router>
    );
  }
}

export default App;
