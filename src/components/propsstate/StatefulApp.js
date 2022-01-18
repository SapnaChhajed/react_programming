import { tab } from '@testing-library/user-event/dist/tab'
import React, { Component } from 'react'

//Container - SCC
class StatefulApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { 'id': 1, 'name': 'Sapna', 'age': 28 },
                { 'id': 2, 'name': 'Ankit', 'age': 27 },
                { 'id': 3, 'name': 'Jitesh', 'age': 25 },
            ]
        }
    }
    render() {
        return (
            //<React.Fragment>
            <><h3 className='bg-danger'>Bank Customers</h3>
                <table className='table table-hover table-striped'>
                    <tbody>
                        {
                            this.state.data.map((customer, index) =>
                                <TableRow key={index} data={customer} />
                            )
                        }                    
                    </tbody>
                </table>
            </>
            //</React.Fragment>

        )
    }
}

//presentation - the below tr is private as const has no keyword export
const TableRow = (props) => {
    return (
        <tr>
            <td>{props.data.id}</td>
            <td>{props.data.name}</td>
            <td>{props.data.age}</td>
        </tr>
    )
}

export default StatefulApp