import React, {useState} from "react"

// using function
function State() {
    const [answer] = useState("Yes")

    return(
        <div>
            Is this true ? {answer}
        </div>
    )
}
export default State