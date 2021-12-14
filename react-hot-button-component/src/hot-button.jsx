import React from 'react';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const clicks = this.state.clicks;
    let className = '';
    if (clicks < 3) {
      className = 'purple';
    } else if (clicks < 6) {
      className = 'lPurple';
    } else if (clicks < 9) {
      className = 'red';
    } else if (clicks < 12) {
      className = 'mustard';
    } else if (clicks < 15) {
      className = 'yellow';
    } else {
      className = 'white';
    }
    return <button onClick = {this.handleClick} className = {className}>Hot Button</button>;
  }

  handleClick() {
    const counter = this.state.clicks + 1;
    this.setState({ clicks: counter });
  }
}

export default CustomButton;
