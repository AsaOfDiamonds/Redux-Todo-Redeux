import React, { Component } from 'react';

import './App.css';
import GoalList from './components/GoalList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GoalList />
      </div>
    );
  }
}

export default App;
