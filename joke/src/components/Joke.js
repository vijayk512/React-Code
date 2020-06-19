import React from "react"

function Joke(props) {
    return(
        <div>
            <h3 style={{ display: props.question ? "block": "none"}}>Question: {`${props.question}`}</h3>
            <p>Answer: {`${props.punchLine}`}</p>
            <hr></hr>
        </div>
    )
}

export default Joke