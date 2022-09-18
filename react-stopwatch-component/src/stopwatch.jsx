import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: true,
      timer: 0,
      myVar: '',
      className: ''
    };
    this.handlePlayer = this.handlePlayer.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  render() {
    const player = this.state.player;
    if (player) {
      this.setState.className = 'fas fa-play';
    } else {
      this.setState.className = 'fas fa-pause';
    }
    return (
        <div className="container">
          <div onClick = {this.handleClear} className="circle">
            <p>{this.state.timer}</p>
          </div>
          <i onClick = {this.handlePlayer} className= {this.className}></i>
        </div>
    );
  }

  handlePlayer() {
    let counter = this.state.timer;
    const myVar = setInterval(() => {
      counter++;
      this.setState({ timer: counter });
    }, 1000);
    this.setState({ myVar: myVar, player: false });
  }

  handleStop() {
    clearInterval(this.state.myVar);
    this.setState({ player: true });
  }

  handleClear() {
    this.setState({ timer: 0 });
  }
}

export default Stopwatch;
