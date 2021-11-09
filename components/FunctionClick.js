import React from 'react'

function FunctionClick() {

    let audio = new Audio("/files/Monolog.mp3")
    function clickHandler() {
        audio.play()
    } 
     
    return (
        <div>
            <button onClick={clickHandler}>Click me for relaxed moods.</button>
             
        </div>
    )
}

export default FunctionClick
