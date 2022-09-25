import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalClass: 'modal hidden',
      overlayClass: 'overlay'
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div onClick = {this.handleClose} className = {this.state.overlayClass}>
          <div className="normal-page">
            <i onClick = {this.handleOpen} className="fas fa-bars"></i>
          </div>
          <div className={this.state.modalClass}>
            <a href="#" onClick = {this.handleClose} className="links">Menu</a>
            <a href="#" onClick = {this.handleClose} className="links">About</a>
            <a href="#" onClick = {this.handleClose} className="links">Get Started</a>
            <a href="#" onClick = {this.handleClose} className="links">Sign In</a>
          </div>
        </div>
      </div>
    );
  }

  handleOpen() {
    this.setState({ modalClass: 'modal' });
    this.setState({ overlayClass: 'overlay' });
  }

  handleClose() {
    if (event.target === 'overlay' || event.target === '') {
      this.setState();
    }
    this.setState({ modalClass: 'modal hidden' });
    this.setState({ overlayClass: 'overlay hidden' });
  }
}

export default AppDrawer;
