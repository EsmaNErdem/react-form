import React, { useState } from "react";
import {v4 as uuid} from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const INITIAL_STATE = [
        {id: uuid(), color:"greenyellow", width:"200px", height: "90px"},
        {id: uuid(), color:"deeppink", width:"150px", height: "105px"}
    ]

    const [boxes, setBoxes] = useState(INITIAL_STATE);

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id:uuid()}])
    }

    const removeBox = (id) => {
        setBoxes(boxes => boxes.filter(b => b.id !== id))
    }


    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox}/>
            <div>
                {boxes.map(({id, color, width, height}) => (
                <Box 
                id={id}
                key={id} 
                color={color} 
                width={width} 
                height={height}
                handleRemove={removeBox}
                />))}
            </div>
        </div>
    )
}

export default BoxList;