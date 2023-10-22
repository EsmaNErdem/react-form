
const Box = ({id, color, width, height, handleRemove}) => {
    return (
        <>
        <div 
        className="Box" 
        style={{background: color, width: width, height: height}}>
        </div>
        <button data-testid={color} onClick={() => handleRemove(id)}>X</button>
        </>
    )
}

export default Box;