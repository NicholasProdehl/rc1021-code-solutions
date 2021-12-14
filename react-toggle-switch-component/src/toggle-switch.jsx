import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { switch: false };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const Switch = this.state.switch;
    if (Switch) {
      return (
        <div className = "container">
          <div onClick = {this.handleClick} className = "on">
            <div className = "shifter-on"></div>
          </div>
          <p>On</p>
        </div>
      );
    }
    return (
      <div className = "container">
        <div onClick = {this.handleClick} className = "off">
          <div className = "shifter-off"></div>
        </div>
        <p>Off</p>
      </div>
    );
  }

  handleClick() {
    if (this.state.switch === true) {
      this.setState({ switch: false });
    } else {
      this.setState({ switch: true });
    }
  }
}

export default ToggleSwitch;
