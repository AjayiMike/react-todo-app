import React from 'react'

const InputTodo = ({addTodo}) => {
    return (
        <div className = 'row'>
            <input type = 'text' className= 'form-control' id = "input" placeholder = 'Enter a new todo' />
            <button type = 'button' onClick = {addTodo} className = "btn btn-add">Add</button>
        </div>
    )
}


export default InputTodo
