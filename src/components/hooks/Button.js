import React, { Component } from 'react'

//Without hook
export default class Button extends Component {
    state={buttonText:"Click Me, Please!!"}

    handleClick=()=>{
     this.setState({buttonText:"Thanks, been clicked"})
    }

    render() {
        const {buttonText}=this.state//object destructure ES6
        return (
            <div>
                <button onClick={this.handleClick}>{buttonText}</button>
            </div>

        )
    }
}
