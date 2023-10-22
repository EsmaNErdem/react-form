import React, { useState } from "react";

const NewTodoForm = ({addTask}) => {
    const INITIAL_STATE = {task: ""}
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleSubmit = e => {
        e.preventDefault()
        addTask(formData)
        setFormData(INITIAL_STATE)
    }

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">New Todo Task:</label>
            <input
                id="task"
                name="task"
                type="text"
                value={formData.task}
                onChange={handleChange}
            />
            <button>Add task!</button>
        </form>
    )
}

export default NewTodoForm;