import React, { Component } from 'react'

export default class CompLifeCycle extends Component {
    //constructor initialized once in lifetime
    constructor(props) {
        super(props)
        this.state = { data: 0, msg: 'Initial Data' }
    }
    setNewNumber(event) {
        this.setState({ data: this.state.data + 1 })
    }

    render() {
        return (
            <div>
                <button onClick={(event) => { this.setNewNumber(event) }}>INCREMENT</button>
                <Content myNumber={this.state.data}></Content>
            </div>
        )
    }
}
//child(birth-death)
class Content extends Component {
    //1. Initialization phase
    constructor(props) {
        super(props)
        this.state = { name: 'Sapna' }
        console.log('In Constructor:' + props.myNumber)//0 
    }
    //2. render
    render() {
        return (
            <div>
                <h3 id='txt1'>{this.props.myNumber}</h3>
                <h4 id='company'>Bank of America</h4>
            </div>
        )
    }
    //3.ComponentDidMount - this will be called once in lifecycle
    componentDidMount() {
        //Ajax call to api to initialize data or to register event or subscribe to websocket
        console.log('In CDM:' + this.props.myNumber)
    }
    //4. componentWillReceiveprops
    //static method sit in Stack as singleton to allow you to extract states
    static getDerivedStateFromProps(props, state) {
        //validation of props and state should be done here
        //ajax to api to initialize
        console.log('In gDSFP' + props.myNumber)
        console.log(state.name)
        //ajax call
        return { newdata: 'New customers data' }
    }

    //5.
    shouldComponentUpdate(props, state) {
        console.log('decide to render or not in SCU')
        console.log(state)
        if (props.myNumber > 5)
            return true
        else
            return false
    }

    //6.
    componentDidUpdate() {
        //manipulate real dom with js/query
        console.log('In CDU:' + document.getElementById('company').innerText)
    }
    //7.
    componentDidCatch(error) {
        //do remote logging in db with ajax
        console.log('Error occured' + error)
    }
    //8.
    componentWillUnmount() {
        //clean up/ unsubscribe to websocket/rx oberabe /clean cache
        //avoid memory leak
        console.log('Unmounted')
    }


}
