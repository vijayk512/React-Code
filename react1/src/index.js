import React from "react"
import ReactDom from "react-dom"

import MyInfo from "./components/MyInfo"
import App from "./App"

function Welcome(){
    return (<div>
        <h1>Welcome React</h1>
        <p>This is a Paragraph</p>
    </div>)
}

ReactDom.render(<Welcome />,
    document.getElementById("root")
)

function MyList(){

    return (
        <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
        </ul>
    )
}

ReactDom.render(<MyList />, document.getElementById("list"))

//Creating a some more element



ReactDom.render(<MyInfo />, document.getElementById("info"))

ReactDom.render(<App />, document.getElementById("info"))