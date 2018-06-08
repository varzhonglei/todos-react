import React, { Component } from 'react';
import './styles.css';

class TodoItem extends Component {
  constructor(props){
    super(props);
    this.state = { editing: false };
    this.oldTodo = '';
  }
  componentDidUpdate(){
   this.domFixInput.focus();
  }
  handleCheckbox = (e) => {
    this.props.handleCheckbox(this.props.todoName)
  }
  handleDestroy = () => {
    this.props.destroyOneTodo(this.props.todoName)
  }
  handleEdit = () => {
    this.oldTodo = this.props.todoName;
    this.domFixInput.value = this.props.todoName;
    this.setState({ editing: true });
  }
  handleBlur = () => {
    this.submitFix()
  }
  handleKeyDown = (e) => {
    if ( e.nativeEvent.keyCode === 13 && this.domFixInput.value !== '' ){
      this.submitFix()
    }
  }
  submitFix = () => {
    this.setState({ editing: false })
    this.props.handleFix( this.oldTodo, this.domFixInput.value );
  }
  render() {
    return (
      <li className={ (this.state.editing ? 'editing' : '') + ' todoapp-todolist-item' }>
          <div className={ (this.props.isDone ? 'todoitem-completed' : '') + ' todoitem-view' }>
            <input type="checkbox"  checked={this.props.isDone} onChange={this.handleCheckbox} className='todoitem-toggle'/>
            <label className='todoitem-content' onDoubleClick={this.handleEdit}>{this.props.todoName}</label>
            <button className='todoitem-destroy' onClick={this.handleDestroy}></button>
          </div>
          <input type="text" className='todoitem-fixinput' 
          onBlur={this.handleBlur}
          onKeyDown={this.handleKeyDown}
          ref={input => this.domFixInput = input}/>
      </li>
    );
  }
}

export default TodoItem;