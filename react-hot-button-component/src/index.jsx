import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    if (this.state.count <= 3) {
      return <button onClick={this.handleClick} className="hot-button cold">Hot Button! {this.state.count}</button>;
    } else if (this.state.count <= 6) {
      return <button onClick={this.handleClick} className="hot-button cool">Hot-button! {this.state.count}</button>;
    } else if (this.state.count <= 9) {
      return <button onClick={this.handleClick} className="hot-button tepid">Hot-button! {this.state.count}</button>;
    } else if (this.state.count <= 12) {
      return <button onClick={this.handleClick} className="hot-button warm">Hot-button! {this.state.count}</button>;
    } else if (this.state.count <= 15) {
      return <button onClick={this.handleClick} className="hot-button hot">Hot-button! {this.state.count}</button>;
    } else if (this.state.count >= 16) {
      return <button onClick={this.handleClick} className="hot-button nuclear">Hot-button! {this.state.count}</button>;
    }
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
