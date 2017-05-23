import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Timeline from './Timeline';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/timeline" component={Timeline} />
        </div>
      </Router>
    );
  }
}

export default App;
