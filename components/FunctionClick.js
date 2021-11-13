import React from 'react'
import ModalImage from "react-modal-image";

function FunctionClick() {

    
    function clickHandler() {
       alert('hi');
    } 
     let urlToTinyImageFile = "/files/lime.jpg";
     let urlToHugeImageFile = "/files/Norway.jpg";
    return (
        <div>
            <button onClick={clickHandler}>Click to open an image.</button>
            <ModalImage
  small={urlToTinyImageFile}
  large={urlToHugeImageFile}
  alt="Hello World!"
/>;
        </div>
    )
}

export default FunctionClick
