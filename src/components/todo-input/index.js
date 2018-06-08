import React, { Component } from 'react';
import './styles.css';

class TodoInput extends Component {
  constructor(props){
    super(props);
    this.state = { value: '' }
  }
  handleChange = (e) => {
      this.setState({ value: e.target.value })
  }
  handleSumit = (e) => {
      if (e.nativeEvent.keyCode === 13 && this.state.value !== '') {
        this.props.addTodo(this.state.value);
        this.setState({ value : '' })
      }
  }
  render() {
    return (
      <input value={this.state.value} 
      onChange={this.handleChange} 
      onKeyDown={this.handleSumit} 
      className='new-todo'
      placeholder='what need to be done?'
      />
    );
  }
}

export default TodoInput;