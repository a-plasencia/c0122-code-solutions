import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    if (this.state.isToggleOn === false) {
      return (
      <React.Fragment>
        <i onClick={this.handleClick} className='fa-solid fa-toggle-off'></i>
        <span>off</span>
      </React.Fragment>
      );
    } else {
      return (
      <React.Fragment>
        <i onClick={this.handleClick} className='fa-solid fa-toggle-on'></i>
        <span>on</span>
      </React.Fragment>
      );
    }
  }
}

export default ToggleSwitch;
