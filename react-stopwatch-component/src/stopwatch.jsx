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
  }

  handleTimer() {

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
      <button>{this.state.isTimer}</button>
      <i onClick={this.handleClick} className={`fa-solid ${boolean}`}></i>
    </React.Fragment>
    );
  }
}

export default Stopwatch;
