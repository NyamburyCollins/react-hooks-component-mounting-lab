import React, { Component } from 'react';  // Fixed: Import `Component`
import Timer from './Timer';

class App extends Component {
  state = {
    timerIDs: []
  };

  // Optional: Add a timer on mount (if intentional)
  componentDidMount() {
    // this.handleAddTimer(); // Uncomment if you want a timer on load
  }

  render() {
    return (
      <div className="App">
        <h1>MultiTimer</h1>
        <button onClick={this.handleAddTimer}>Add New Timer</button>
        <div className="TimerGrid">
          {this.renderTimers()}
        </div>
      </div>
    );
  }

  renderTimers = () => {
    return this.state.timerIDs.map(id => (
      <Timer key={id} id={id} removeTimer={this.removeTimer} />
    ));
  };

  // Generate a more unique ID (using timestamp)
  handleAddTimer = () => {
    this.setState(prevState => ({
      timerIDs: [...prevState.timerIDs, Date.now()]
    }));
  };

  removeTimer = id => {
    this.setState(prevState => ({
      timerIDs: prevState.timerIDs.filter(timer_id => timer_id !== id)
    }));
  };
}

export default App;