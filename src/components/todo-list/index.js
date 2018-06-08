import React, { Component } from 'react';
import TodoItem from '../todo-item';
import './styles.css'


class TodoList extends Component {
  handleCheckbox = (todoName) => {
    this.props.toggleTheTodo(todoName)
  }
  destroyOneTodo = (todoName) => {
    this.props.destroyOneTodo(todoName)
  }
  handleFix = (oldTodo, newTodo) => {
    this.props.handleFix(oldTodo, newTodo)
  }
  
  render() {
    const {todoList, showTab} = this.props
    let resList = []

    if(showTab === "All") {
      resList = todoList 
    } else if(showTab === "Active") {
      resList = todoList.filter(item => !item.isDone)
    } else {
      resList = todoList.filter(item => item.isDone)
    }

    return (
      <ul className='todolist'>
      {resList.map((item, index) => {
        return <TodoItem key={index} todoName={item.todoName}
          destroyOneTodo={this.destroyOneTodo}
          handleFix={this.handleFix}
          isDone={item.isDone} handleCheckbox={this.handleCheckbox} />
      })}
      </ul>
    );
  }
}

export default TodoList;