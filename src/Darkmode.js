import React, { useState } from 'react';

const DarkMode = () => {
    const [state, setState] = useState(true);
  
    const element = document.body 
  
    function onToggle() {
  
        if (state == true) {
            setState(false)
        } else setState(true)
    }
    if (state === true) {
    element.style.backgroundColor="darkblue"; element.style.color="white";
      return( <div className="darkDiv">
          <button className="dark" onClick={onToggle}>LIGHT MODE</button>
           </div>) 
           
  } 
  else 
  element.style.backgroundColor="white"; element.style.color="darkblue";
  return ( <div>
      <button className="light" onClick={onToggle}>DARK MODE</button>
       </div>) 
   } 
    

    export default DarkMode  