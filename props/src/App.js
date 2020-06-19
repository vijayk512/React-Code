import React from "react"
import ContactCard from "./components/ContactCard"
function App() {

    return(
        <div className="contacts">
            {/*<ContactCard name="Mr. Whiskerson" imgUrl="http://placekitten.com/300/200" phone="Phone: (212) 555-1234"*/}
            {/*email="Email: mr.whiskaz@catnap.meow"/>*/}
            {/**/}
            {/*<ContactCard name="Fluffykins" imgUrl="http://placekitten.com/400/200" phone="Phone: (212) 555-2345"*/}
            {/*email="Email: fluff@me.com"/>*/}
            {/**/}
            {/**/}
            {/*<ContactCard name="Destroyer" imgUrl="http://placekitten.com/400/300" phone="Phone: (212) 555-3456"*/}
            {/*email="Email: ofworlds@yahoo.com"/>*/}
            {/**/}
            {/**/}
            {/*<ContactCard name="Felix" imgUrl="http://placekitten.com/200/100" phone="Phone: (212) 555-4567"*/}
            {/*email="Email: thecat@hotmail.com"/>*/}
            {/*this is json example*/}
            <ContactCard
                contact={{
                    name:"Mr. Whiskerson", imgUrl:"http://placekitten.com/300/200", phone:"Phone: (212) 555-1234",
                    email:"Email: mr.whiskaz@catnap.meow"
                }}
            />
        </div>

    )
}



export default App