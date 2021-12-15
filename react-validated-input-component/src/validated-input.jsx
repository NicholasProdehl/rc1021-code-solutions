import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      valid: '',
      prompt: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div className = "input">
          <form onSubmit = {this.handleSubmit}>
            <label htmlFor="pass">Enter Password:</label><br/>
            <input type="password" id="pass" value = {this.state.value} onChange = {this.handleChange}/>
          </form>
          <i className={this.state.valid}/>
        </div>
        <p>{this.state.prompt}</p>
      </div>
    );
  }

  handleSubmit(event) {
    const password = this.state.value;
    if (password.length === 0) {
      this.setState({
        valid: 'fas fa-times',
        prompt: 'A password is required'
      });
    } else if (password.length < 8) {
      this.setState({
        valid: 'fas fa-times',
        prompt: 'Password must be at least 8 characters'
      });
    } else if (password.length >= 8) {
      this.setState({
        valid: 'fas fa-check',
        prompt: ''
      });
    }
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
}

export default ValidatedInput;
