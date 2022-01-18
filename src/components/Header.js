import React, { Component } from 'react'
//Container (State)
//Container components are called default
//component is written by react team which maintains a state
export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = { name: 'Sapna' }
    }
    render() {
        return (
            <div>
                <h2 className='bg-info text-center text-dark'>
                    React SPA Project of {this.props.company} -{this.props.city}
                </h2>
            </div>
        )
    }
}


Header.defaultProps={
company:'SC InfoTech'
}