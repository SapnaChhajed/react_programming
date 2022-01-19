//refs
import React, { Component } from 'react'

export default class RefsDemo extends Component {
    constructor(props){
        super(props)
        this.state={data:"React"}
        //new syntax
        this.inputRef= React.createRef();
    }
    updateState(event) {
        this.setState({data:event.target.value})
    }
    clearInput(){
        alert(this.refs.mytext.value)
        this.setState({data:""})
        //this.refs.pwd.focus()
this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                Enter UserName:
                <input type="text" value={this.state.data}
                        onChange={(e)=> this.updateState(e)} ref="mytext" id="txt1"/>
                        
                Enter Password:
                <input type="password" ref={this.inputRef}/>
//useRef
                <button onClick={()=>this.clearInput()}>Reset</button>
                <h3>{this.state.data}</h3>
            </div>
        )
    }
}
