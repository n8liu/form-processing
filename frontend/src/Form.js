import React from 'react'

class Form extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          text: '',
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.text);
    event.preventDefault();
  }
  
  render() {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name 
              <input type="text" 
                     value={this.state.text}
                     onChange={this.handleChange}/>
            </label>
            <input type="submit" name="submit" />
          </form>
        </div>
    );
  }
}

export default Form;