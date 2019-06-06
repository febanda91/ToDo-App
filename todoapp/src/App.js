import React, { Component } from 'react';
import ToDos from './ToDos'
import AddToDo from './AddToDo'




class App extends Component {
  state = {
    todos: [
      {id:1, content: 'buy some milk'},
      {id:2, content: 'take out the trash'}
    ]
  }

  deleteTodo = (id) => {
   const todos = this.state.todos.filter(todo => {
     return todo.id !== id 
   });
   this.setState({
     todos: todos
  })
}
  
  addToDo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos 
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Francisco's To-Do List</h1>
        <ToDos todos={this.state.todos} deleteToDo={this.deleteTodo}/>
        <AddToDo addToDo={this.addToDo}/>
      </div>
    );
  }
}

export default App;
