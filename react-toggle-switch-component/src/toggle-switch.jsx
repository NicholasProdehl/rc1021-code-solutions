import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { switch: false };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const Switch = this.state.switch;
    let shiftClass;
    let mainClass;
    if (Switch) {
      shiftClass = 'shifter-on';
      mainClass = 'on';
    } else {
      shiftClass = 'shifter-off';
      mainClass = 'off';
    }
    return (
      <div className = "container">
        <div onClick = {this.handleClick} className = {mainClass}>
          <div className = {shiftClass}></div>
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
