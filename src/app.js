import React, {useState, Fragment} from 'react'
import TodoList from './components/todoList'
import InputTodo from './components/inputTodo'
import './app.css'

const App = () => {
    const [todos, setTodos] = useState([])

        const addTodo = () => {
            let value = document.querySelector('#input').value;
            document.querySelector('#input').value = '';
            document.querySelector('#input').focus();

            if (value) {
                let uncompletedTodos = todos.filter(todo => todo.completed === false)
                let completedTodos = todos.filter(todo => todo.completed === true)
                let newTodo = {task: value, id: Math.random(), completed: false}
                setTodos([...uncompletedTodos, newTodo, ...completedTodos])
            }else {
                alert(`enter a task`)
            }
        }

        const deleteTodo = (id) => {
           setTodos(todos.filter(todo => todo.id !== id))
        }

        const todoCompleted = (index) => {
             let targetTodo = todos.slice(index, (index+1));
             let todosBefore = todos.slice(0, index)
             let todosAfter = todos.slice(index+1)
             targetTodo[0].completed = true;
            const sorted = todosBefore.concat(todosAfter, targetTodo)
            setTodos(sorted)
        }


       let CheckCompleted = todos.filter(todo => todo.completed===true)

    return (
        <Fragment>
            <header>
                <h2>Todo-App</h2>
            </header>
            <div id = 'main'>
                <InputTodo addTodo = {addTodo} />

                {(todos.length === 0) ?
                    <p className = 'text-muted'>No todos to display. kindly create new todos</p> :  ''}

                <TodoList todos = {todos} deleteHandler = {deleteTodo} completed = {todoCompleted} />
            </div>
            <footer>
                {(CheckCompleted.length===0) ? 
                 '' : <button className = 'btn btn-clear-completed' onClick = {() => setTodos(todos.filter(todo => todo.completed === false)) }>clear completed</button>}
                {(todos.length === 0) ?
                    '' : <button className = 'btn btn-clear-all' onClick = {() => setTodos([])} >clear all</button>}
            </footer>
            
        </Fragment>
    )
}

export default App