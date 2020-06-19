import React from "react"

import Joke from "./Joke"
import Product from "./Product"
import jokesData from "./jokesData"
import productsData from "./vschoolProducts"
function App() {
    const jokesComponents = jokesData.map( joke => {
        return (
            <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>
        )
    })

    // products

    const productComponents = productsData.map( item =>{
        return (
            <Product key={item.id} product={item} />
        )
    })

    return (
        <div>
            {/*<Joke*/}

            {/*    punchLine="I don't know, but the flag is a big plus!"*/}
            {/*/>*/}
            {/*<Joke*/}
            {/*    question="What's the best thing about Switzerland?"*/}
            {/*    punchLine="I don't know, but the flag is a big plus!"*/}
            {/*/>*/}

            {/*<Joke*/}
            {/*    question="Did you hear about the mathematician who's afraid of negative numbers?"*/}
            {/*    punchLine="He'll stop at nothing to avoid them!"*/}
            {/*/>*/}

            {/*<Joke*/}
            {/*    question="Hear about the new restaurant called Karma?"*/}
            {/*    punchLine="There’s no menu: You get what you deserve."*/}
            {/*/>*/}

            {/*<Joke*/}
            {/*    question="Did you hear about the actor who fell through the floorboards?"*/}
            {/*    punchLine="He was just going through a stage."*/}
            {/*/>*/}

            {/*<Joke*/}
            {/*    question="Did you hear about the claustrophobic astronaut?"*/}
            {/*    punchLine="He just needed a little space."*/}
            {/*/>*/}
            <h1>Jokes</h1>

            {jokesComponents}
            <h1>School Product Data</h1>
            {productComponents}
        </div>
    )
}

export default App