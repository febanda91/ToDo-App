import React from 'react';

const Todos = ({todos, deleteToDo}) => {
    
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteToDo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : 
    
    (
        <p className="center">You have no todo's left, yay!</p>
    )



    return (
        <div className="todos collection">
        {todoList}
        </div>

    )
}

export default Todos



// import React, { Component } from 'react';

// const ToDos = ({todos}) => {
//     const toDoList = todos.length ? () : ()
// }

// export default ToDos;
