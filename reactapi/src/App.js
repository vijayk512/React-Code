import React from "react"

class  App extends React.Component{
    constructor(){
        super()
        this.state = {
            loading: false,
            data: [],
            apiData: ''
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        })

        fetch("https://swapi.dev/api/people")
            .then(response => response.json())
            // .then(data=> console.log(data.results))
            .then(data => {
                this.setState({
                    data: data.results,
                    loading: false
                })
            })
    }



    render() {
        // const text = thisv
        // .state.loading ? 'loading...' : this.state.data
        return(
            <div>
                {
                    this.state.data.map( item => (
                        <div>
                            <p>Name: {item.name}</p>
                            <p>Height: {item.height}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default App