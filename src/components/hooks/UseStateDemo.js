import React, { useState } from "react";
//load hook useState.

//with hook using presentation
export default function Button() {
    //data={name:"Sapna", age=25}
    //pass initial state value
    //array destruct object will be returned...

    const [buttonText, setButtonText] = useState("Click Me, Please!!")

    function handleClick() {
        return setButtonText("Thanks, been clicked")
    }

    return <button onClick={handleClick}>{buttonText}</button> // returning jsx

}