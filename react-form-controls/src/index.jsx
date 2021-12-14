import React from 'react';
import ReactDOM from 'react-dom';

class NewsLetterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: undefined };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log('An email was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className = "container">
        <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" onChange = {this.handleChange}/>
        </label>
        <input type="submit" value="Sign up!"></input>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<NewsLetterForm/>, document.getElementById('root'));
