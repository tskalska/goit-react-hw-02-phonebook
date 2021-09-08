import React from 'react';
import Container from '../container/Container';
import shortid from 'shortid';


class Form extends React.Component {
  state = {
    name: '',
    number: '',
  }

  nemeInputId=shortid.generate();
  numberInputId=shortid.generate();

  handleInputChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value, 
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render(){
    return (
    <div>
      <Container 
        name={this.state.name}
        nemeInputId={this.nemeInputId}
        numberInputId={this.numberInputId}
        handleChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
      />
      
    </div>
    );
  }
}

export default Form;