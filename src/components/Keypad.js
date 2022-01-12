import React from "react";

function Keypad(){
    function enteringPassword(){
        console.log('Entering password...')

    }
    return(
        <input onChange ={enteringPassword} type="password" />
    )
}

export default Keypad