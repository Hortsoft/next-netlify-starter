import React from 'react'
 
function FunctionClick() { 
    function clickHandler() {
       alert('hi');
    } 
    
    return (
        <div>
            <button onClick={clickHandler}>Click to say Hi.</button>
       </div>
    )
}

export default FunctionClick
