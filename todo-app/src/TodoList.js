import React, { useState } from "react";
import {v4 as uuid} from "uuid";
import NewTodoForm from "./NewTodoForm"
import Todo from "./Todo"

const TodoList = () => {
    const INITIAL_STATE = [
        {id: uuid(), task: "Wash dishes"}
    ]

    const [tasks, setTasks] = useState(INITIAL_STATE)

    const addTask = (newTask) => {
        setTasks(tasks => [...tasks, {...newTask, id:uuid()}])
    }

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id))
    }

    const updateTask = (id, newTask) => {
        setTasks(tasks => 
            tasks.map(task => 
                task.id === id ? {...task, task:newTask} : task
            )
        )
    }

    return (
        <div>
            <NewTodoForm addTask={addTask} />
            <ul>
                {tasks.map(({ id, task }) =>(
                    <Todo 
                    key={id} 
                    id={id} 
                    task={task} 
                    handleRemove={removeTask}
                    handleUpdate={updateTask} />
                ))}
            </ul>
        </div>
    )
}

export default TodoList;