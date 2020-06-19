import React from "react"
import ReactDom from "react-dom"

// import App from "./App"
import State from "./State"
import Count from "./Count"


ReactDom.render(<State />, document.getElementById("root"))
ReactDom.render(<Count />, document.getElementById("root1"))