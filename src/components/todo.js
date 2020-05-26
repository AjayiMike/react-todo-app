import React from 'react';

const Todo = ({deleteHandle, todo, index, completed})=> {

    let computedStyle = "todo";
    computedStyle = (todo.completed === true) ? computedStyle + ' todo-completed' : computedStyle + ''
    return (
            <div className = {computedStyle}>
                <p className = 'todo-text'>{todo.task}</p>
                <span className = 'del' onClick = {() => deleteHandle(todo.id)}>X</span>
                <button disabled = {todo.completed} className = {(todo.completed === true) ? 'btn btn-completed' : 'btn btn-not-completed'} onClick = {(todo.completed === false) ? () => completed(index) : ''}>Done</button>
            </div>  
    )
}

export default Todo

