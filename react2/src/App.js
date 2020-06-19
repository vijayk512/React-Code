import React from "react"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"


function App() {
    const firstName = "Vijay"
    const lastName = "Panwar"
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    const styles = {
        color: "Orange"
    }

    if (hours < 12){
        timeOfDay = "morning"
        styles.color = "Green"
    }else if (hours >= 12 && hours < 17){
        timeOfDay = "afternoon"
        styles.color = "Blue"
    }else{
        timeOfDay = "night"
        styles.color = "Red"
    }



    return(
        <div>
            <Header></Header>
            <MainContent></MainContent>
            <h1>Hello {`${firstName} ${lastName}`}</h1>
            <h1 style={styles}>It's { timeOfDay }</h1>
            <Footer></Footer>
        </div>
    )
}



export default App