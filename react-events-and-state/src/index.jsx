import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };

    this.handleClick =
    this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return <button onClick={this.handleClick}>
      {this.state.isToggleOn ? 'Click Me!' : 'Thanks!'}
    </button>;
  }

}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
