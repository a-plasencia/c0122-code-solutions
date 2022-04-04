import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isIconOn: false,
      isToggleOn: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      isIconOn: !prevState.isIconOn
    }));
  }

  getIcon() {
    if (this.state.isIconOn === false) {
      return '';
    } else {
      return 'hidden';
    }
  }

  getModal() {
    if (this.state.isToggleOn === true) {
      return ' ';
    } else {
      return 'hidden';
    }
  }

  render() {
    const iconSwitch = this.getIcon();
    const modal = this.getModal();
    return (
      <React.Fragment>
        <i onClick={this.handleClick} className={`fa-solid fa-align-justify ${iconSwitch}`}></i>
        <div className={`white-box ${modal}`}>
          <h1>Menu</h1>
          <h3 onClick={this.handleClick}>Get Started</h3>
          <h3 onClick={this.handleClick}>Sign in</h3>
        </div>
        <div onClick={this.handleClick} className={`gray-box ${modal}`}></div>
      </React.Fragment>
    );
  }
}

export default AppDrawer;
