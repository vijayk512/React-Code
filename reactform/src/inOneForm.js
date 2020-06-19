import React from "react"

class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: 0,
            gender: "male",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false,

        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({
            [name]: checked
        }) : this.setState({
            [name]: value
        })
    }

    render() {
        return(

            <form>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="form-control"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input
                        type="text"
                        name="age"
                        className="form-control"
                        placeholder="Age"
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                </div>

                <div className="form-check">
                    <input
                        type="radio"
                        name="gender"
                        className="form-check-input"
                        id="male"
                        checked={this.state.gender === "male"}
                        value="male"
                        onChange={this.handleChange}
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
                        checked={this.state.gender === "female"}
                        value="female"
                        onChange={this.handleChange}
                    />
                    <label className="form-check-label" htmlFor="female">
                        Female
                    </label>
                </div>

                <div className="form-group">
                    <label>Select Destination</label>
                    <select
                        value={this.state.destination}
                        name="destination"
                        className="form-control"
                        onChange={this.handleChange}
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
                        onChange={this.handleChange}
                        checked={this.state.isVegan}
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
                        onChange={this.handleChange}
                        checked={this.state.isKosher}
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
                        onChange={this.handleChange}
                        checked={this.state.isLactoseFree}
                    />
                    <label className="form-check-label" htmlFor="lactoseFree">
                        Lactose Free
                    </label>
                </div>
                <button className="btn btn-sm btn-success">Submit</button>
            </form>
        )
    }
}

export default Form