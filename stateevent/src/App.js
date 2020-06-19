import React from "react"

function changeCount(){

}

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
        this.changeCount = this.changeCount.bind(this)
    }

    changeCount(){
        // when you want to change the state, it will create new version of setState
        this.setState(prevState =>
        {
            return {
                count: prevState.count + 1
            }
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button
                    onClick={this.changeCount}>
                    Change!
                </button>
            </div>
        );
    }
}

export default App