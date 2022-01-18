import React, { useState, useEffect } from "react";

//useEffect = componentDidMount

export default function DataLoader() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setData(data))

    },[]) //[] if not there memory leak will happen ...press F12 and go to Netowrk and check how memory leak happens 

    return (
        <div className="bg-warning">
            <ui>
                {data.map(user => (
                    <li key={user.id}>{user.name}</li>
                )
                )}
            </ui>
        </div>
    )
}