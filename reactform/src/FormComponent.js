import React from "react"

function FormComponent(props) {
    return(

        <main>
        <form>
            <div className="form-group">
                <label>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="form-control"
                    value={props.data.firstName}
                    onChange={props.handleChange}
                />
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="Last Name"
                    value={props.data.lastName}
                    onChange={props.handleChange}
                />
            </div>

            <div className="form-group">
                <label>Age</label>
                <input
                    type="text"
                    name="age"
                    className="form-control"
                    placeholder="Age"
                    value={props.data.age}
                    onChange={props.handleChange}
                />
            </div>

            <div className="form-check">
                <input
                    type="radio"
                    name="gender"
                    className="form-check-input"
                    id="male"
                    checked={props.data.gender === "male"}
                    value="male"
                    onChange={props.handleChange}
                />
                <label className="form-check-label" htmlFor="male">
                    Male
                </label>
            </div>

            <div className="form-check form-group">
                <input
                    type="radio"
                    name="gender"
                    className="form-check-input"
                    id="female"
                    checked={props.data.gender === "female"}
                    value="female"
                    onChange={props.handleChange}
                />
                <label className="form-check-label" htmlFor="female">
                    Female
                </label>
            </div>

            <div className="form-group">
                <label>Select Destination</label>
                <select
                    value={props.data.destination}
                    name="destination"
                    className="form-control"
                    onChange={props.handleChange}
                >
                    <option value="germany">Germany</option>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="london">London</option>
                </select>
            </div>

            <div className="form-check form-group">
                <input
                    type="checkbox"
                    name="isVegan"
                    id="vegan"
                    className="form-check-input"
                    onChange={props.handleChange}
                    checked={props.data.isVegan}
                />
                <label className="form-check-label" htmlFor="vegan">
                    Vegan
                </label>
            </div>
            <div className="form-check form-group">
                <input
                    type="checkbox"
                    name="isKosher"
                    id="kosher"
                    className="form-check-input"
                    onChange={props.handleChange}
                    checked={props.data.isKosher}
                />
                <label className="form-check-label" htmlFor="kosher">
                    Kosher
                </label>
            </div>
            <div className="form-check form-group">
                <input
                    type="checkbox"
                    name="isLactoseFree"
                    id="lactoseFree"
                    className="form-check-input"
                    onChange={props.handleChange}
                    checked={props.data.isLactoseFree}
                />
                <label className="form-check-label" htmlFor="lactoseFree">
                    Lactose Free
                </label>
            </div>
            <button className="btn btn-sm btn-success">Submit</button>
        </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <p>Your dietary restrictions:</p>

            <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
            <p>Kosher: {props.data.isKosher ? "Yes" : "No"}</p>
            <p>Lactose Free: {props.data.isLactoseFree ? "Yes" : "No"}</p>
        </main>


    )
}

export default FormComponent