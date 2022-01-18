import React, { Component } from 'react'
import TextDisplay from './TextDisplay'


//constructor is optional
export default class TextInput extends Component {
    state = { inputText: 'Sapna' }

    handleChange(event) {
        this.setState({ inputText: event.target.value })
    }
    //controlled and uncontrolled component
    //synthetic event handling virtual dom level
    render() {
        return (
            <>
                Company :<input type='text' id='text' />
                <br />
                UserName:<input type='text' value='Sapna' />
                <div>
                    Enter Message:<input type='text'
                        value={this.state.inputText}
                        onChange={(event) => this.handleChange(event)}></input>

                    {this.state.inputText ?
                        console.log('Valid') : console.log('No Data!!')}
                        
                    {this.state.inputText ?
                        <TextDisplay text={this.state.inputText} /> :
                        <TextDisplay text='Enter data please.......no data allowed' />}
                </div>
            </>
        )
    }
}
