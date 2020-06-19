import React, {Component} from "react"
import ReactDom from "react-dom"

// import App from "./components/App"


// #1

class App extends Component{
    render() {
        return (
            <div>
                <Header username="Vijay"/>
                <Greeting/>
            </div>
        )
    }
}

class Header extends Component{
    render() {

        return (
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
}

class Greeting extends Component{
    render() {

        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}

ReactDom.render(<App />, document.getElementById("root"))