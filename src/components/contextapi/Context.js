import React, { Component } from "react"

//1.create the context with initial state
const MyContext = React.createContext()

//const AuthContext = React.createContext({sstoken:",Username:"})

//2. provider component
class MyProvider extends React.Component {
    state = {
        name: "sapna",
        salary: 5000,
        job: 'Engineer'
    }
    render() {
        return (
            <MyContext.Provider value={
                {
                    state: this.state,
                    incrementSalary: () => this.setState({
                        salary: this.state.salary + 1000
                        //fetch(url.then(resp=>this.state.push(response)))
                    })
                }
            }>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

//3. wrap provider to context - producer container (react)
export default class Context extends React.Component {
    render() {
        return (
            <MyProvider>
                <div className="bg-success">
                    <h2> React Context API demo</h2>
                    <Family />
                </div>
            </MyProvider>
        )
    }
}

//consumer
const Family = () => {
    return (
        <div>
            <Person/>
        </div>
    )
}

//5: Person is Consumer
class Person extends React.Component {
    render() {
        return(
            <div>
                <MyContext.Consumer>
                    {//consumer function

                        (context) => (
                            <div><h3 className="bg-primary">Person Details</h3>
                                <h4>Hi!{context.state.name}</h4>
                                <h4 className="bg-danger">Salary:{context.state.salary}</h4>
                                <h4>Job:{context.state.job}</h4>
                                <button className="btn btn-primary"
                                    onClick={context.incrementSalary}>increment Salary</button>
                            </div>
                        )
                    }

                </MyContext.Consumer>
            </div>
        )
    }
}