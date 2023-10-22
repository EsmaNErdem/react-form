import React, { useState } from "react";
import "./Todo.css"

const Todo = ({id, task, handleRemove, handleUpdate}) => {
    const [isEditting, setIsEditting] = useState(false)
    const [edit, setEdit] = useState(task)
    const [markCompleted, setMarkCompleted] = useState(false)

    const toggleEdit = () => {
        setIsEditting(isEditting => !isEditting)
    }

    const handleSubmit = e =>{
        e.preventDefault()
        handleUpdate(id, edit)
        setIsEditting(false)
    }

    const handleChange = e => {
        setEdit(e.target.value)
    }

    const toggleCompleted = () => {
        setMarkCompleted(mark => !mark)
    }

    let toDo = (
        <div>
        <li className={markCompleted ? "Todo-Completed" : ""}>{task}</li>
        <button  onClick={() => handleRemove(id)}>X</button>
        <button onClick={toggleEdit}>Edit</button>
        <button onClick={toggleCompleted}>
        {markCompleted ? "Reverse Mark Completed" : "Mark Completed"}
        </button>
      </div>
    )

    if (isEditting) {
        toDo = (
        <form onSubmit={handleSubmit}>
            <label htmlFor="taskEdit">Edit Todo Task:</label>
            <input
                id="taskEdit"
                name="task"
                type="text"
                value={edit}
                onChange={handleChange}
            />
            <button>Update task!</button>
        </form>
        )
    }

    return toDo
}

export default Todo;