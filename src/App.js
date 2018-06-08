import React, { Component } from 'react';
import TodoInput from './components/todo-input';
import TodoList from './components/todo-list';
import FilterTab from './components/filter-tab';
import { getAll, setItem } from './utils/localstorage'
import './App.css';

class App extends Component {
  state = {
    todoList: [],
    showTab: 'All'
  }
  componentWillMount(){
    const oldTodos = getAll().todoList;
    if ( oldTodos ) {
      this.setState( { todoList: oldTodos.value } )
    }
  }
  componentDidUpdate(){
    setItem('todoList', this.state.todoList)
  }
  handleAddTodo = (inputValue, e) =>  {
    let newTodoList = [...this.state.todoList];
    newTodoList.push({ todoName: inputValue, isDone: false });
    this.setState({ todoList: newTodoList })
  }
  handleToggleTheTodo = (todoName) => {
    let newTodoList = this.state.todoList.map((item) => {
      if (item.todoName === todoName) {
        let tempTodo = item;
        tempTodo.isDone = !tempTodo.isDone;
        return tempTodo
      }
      return item
    })
    this.setState({ todoList: newTodoList })
  }
  handleToggleTab = (theTab) => {
    this.setState({ showTab: theTab })
  }
  getNeedTodoNum = () =>{
    return this.state.todoList.filter((item) => {
      if (item.isDone) return false
      return true
    }).length;
  }
  clearCompleted = () => {
    let newTodoList = this.state.todoList.filter((item) => {
      if (item.isDone) return false
      return true
    })
    this.setState({ todoList: newTodoList })
  }
  destroyOneTodo = (todoName) => {
    let newTodoList = this.state.todoList.filter((item) => {
      if (item.todoName === todoName) return false
      return true
    })
    this.setState({ todoList: newTodoList })
  }
  handleFix = (oldTodo, newTodo) => {
    let newTodoList = this.state.todoList.map((item) => {
      if (item.todoName === oldTodo) {
        item.todoName = newTodo
      }
      return item
    })
    this.setState({ todoList: newTodoList })
  }

  render() {
    return (
      <div className="todoapp">
        <header className='header'>
          <h1>todos</h1>
          <TodoInput addTodo={this.handleAddTodo} />
        </header>
        <section>
          <TodoList todoList={this.state.todoList}
            toggleTheTodo={this.handleToggleTheTodo}
            showTab={this.state.showTab}
            handleFix={this.handleFix}
            destroyOneTodo={this.destroyOneTodo} />
        </section>
        <footer className='footer'>
          <span className='todo-count'>{ this.getNeedTodoNum()} times left</span>
          <div>
            <FilterTab showTab={this.state.showTab} toggleTab={this.handleToggleTab} />
          </div>
          <button onClick={this.clearCompleted} className='clear-completed'>clear completed</button>
        </footer>
      </div>
    );
  }
}

export default App;
