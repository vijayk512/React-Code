import React, {useState, useEffect} from "react"

function Count() {
    const [count, setCount] = useState(0)
    const [answer, setAnswer] = useState("Yes")
    const [color, setColor] = useState("")

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    useEffect(() => {
      setColor("green")
    }, [count])

    return(
        <div>
            <h1 style={{color:color}}>count is {count}</h1>
            <button
                onClick={increment}
            >
                Change!
            </button>
            <button
                onClick={decrement}
            >
                Decrement
            </button>
            <p>is it true ? {answer}</p>
        </div>
    )
}

export default Count

// componentDidMount
// componentDidUpdate
// componentWillUnmount

// side effects