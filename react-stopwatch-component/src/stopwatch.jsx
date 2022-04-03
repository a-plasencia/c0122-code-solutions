import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      isTimer: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleTimer = this.handleTimer.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleTimer() {
    if (this.state.isToggleOn === false) {
      this.timerId = setInterval(() => this.tick(), 1000
      );
    } else {
      clearInterval(this.timerId);
    }
  }

  reset() {
    if (this.state.isToggleOn === false) {
      this.setState({
        isTimer: 0
      });
    }
  }

  tick() {
    this.setState({
      isTimer: this.state.isTimer + 1
    });
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    this.handleTimer();
  }

  isToggle() {
    const boolean = this.state.isToggleOn;
    if (boolean === false) {
      return 'fa-play';
    } else {
      return 'fa-pause';
    }
  }

  render() {
    const boolean = this.isToggle();
    return (
    <React.Fragment>
      <button onClick={this.reset}>{this.state.isTimer}</button>
      <i onClick={this.handleClick} className={`fa-solid ${boolean}`}></i>
    </React.Fragment>
    );
  }
}

export default Stopwatch;
