// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
    return(
    <button onFocus = {(event) => console.log('Good!')} onBlur = {() => console.log('Hey! Eyes on me!')}>Eyes on me</button>
    )
}

export default EyesOnMe