import React from "react"

function ToDoItem(props) {
    const color = props.item.completed ? 'Orange': "Black"
    return(
        <div className="todo-item">
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={{color: color}}>{props.item.text}</p>
        </div>
    )
}

export default ToDoItem