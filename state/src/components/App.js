import React, {Component} from "react"

// class App extends React.Component{
//     //for adding a state create constructor
//     constructor(){
//         super()
//         this.state = {
//             answer: "Yes"
//         }
//     }
//     render() {
//         return(
//             <div>
//                 <h1>Is state important to learn! {this.state.answer}</h1>
//                 <ChildComponent answer={this.state.answer} />
//             </div>
//         )
//     }
// }

class ChildComponent extends React.Component{
    render() {
        return(
            <p>{this.props.answer}</p>
        )
    }
}

class App extends Component {
    constructor(){
        super()
        this.state = {
            name: "Vijay",
            age: "30"
        }
    }
    render() {


        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        )
    }
}

export default App