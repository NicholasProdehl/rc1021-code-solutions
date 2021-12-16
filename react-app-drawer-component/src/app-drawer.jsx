import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div className="normal page">
          <i onClick = {this.handleOpen} className="fas fa-bars"></i>
        </div>
        <div className="modal">
          <a href="#" className="menu">Menu</a>
          <a href="#" className="links">About</a>
          <a href="#" className="links">Get Started</a>
          <a href="#" className="links">Sign In</a>
        </div>
      </div>
    );
  }

  handleOpen() {
    this.setState({ page: true });
  }

  handleClose() {
    this.setState({ page: false });
  }
}

export default AppDrawer;
