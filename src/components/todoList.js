import React  from 'react'
import Todo  from './todo';

const TodoList = ({todos, deleteHandler, completed}) => {

    return (
        <div className = 'row' id = 'todo-container'>
            {
                todos.map((todo, index) => {
                return  <Todo todo = {todo} index = {index} key = {todo.id} deleteHandle = {deleteHandler} completed = {completed} />
                })
            }
        </div>
    )
}

export default TodoList;