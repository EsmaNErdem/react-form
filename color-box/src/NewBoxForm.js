import React, { useState } from "react";

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {color:"", width:"", height:""}
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleSubmit = e => {
        e.preventDefault()
        addBox(formData)
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
            <label htmlFor="color">Background Color:</label>
            <input
                id="color"
                name="color"
                type="text"
                value={formData.color}
                onChange={handleChange}
            />

            <label htmlFor="width">Width:</label>
            <input
                id="width"
                name="width"
                type="text"
                value={formData.width}
                onChange={handleChange}
            />

            <label htmlFor="height">Height:</label>
            <input
                id="height"
                name="height"
                type="text"
                value={formData.height}
                onChange={handleChange}
            />
            
            <button>Add a new box!</button>
        </form>
    )
}

export default NewBoxForm;