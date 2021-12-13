import React from 'react';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const clicks = this.state.clicks;
    let id = '';
    if (clicks < 3) {
      id = 'purple';
    } else if (clicks < 6) {
      id = 'lPurple';
    } else if (clicks < 9) {
      id = 'red';
    } else if (clicks < 12) {
      id = 'mustard';
    } else if (clicks < 15) {
      id = 'yellow';
    } else {
      id = 'white';
    }
    return <button onClick = {this.handleClick} className = {id}>Hot Button</button>;
  }

  handleClick() {
    const counter = this.state.clicks + 1;
    this.setState({ clicks: counter });
  }
}

export default CustomButton;
