import React, { Component } from 'react';
import ToDos from './ToDos'


class App extends Component {
  state = {
    todos: [
      {id:1, content: 'buy some milk'},
      {id:2, content: 'take out the trash'}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Todo's</h1>
        <ToDos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
