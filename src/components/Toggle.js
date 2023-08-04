import React, { useState } from "react"

function Toggle() {
  const [isOn, setIsOn] = useState(false)
  function handleClick() {
    setIsOn((isOn) => !isOn)
  }
  const color = isOn ? "red" : "white"
  return (
    <button style={{ background: color }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  )
}

export default Toggle


//first we add the useState 
//when using a toggle we can set the value of state to false
//what do we want to do with the toggle button?
//we want to know what happens when it is on and when its off
//this is where we use isOn and !isON which represents off
//we set a ternary function on the button tag for what happens when its true or false
//If isOn is true we get on and if false we get off which is what will be displayed on the button as text
//We havent added the click feature yet
//We now add a function handleClick for the onClick
//We set this up using the prop controlling our isOn feature which is the setisON prop. 
//We will then create a callback function set up as shown 
//We take the argument isOn and when passed through if the argument turns out to be true then !isOn will come back false and vise versa
//This is how we toggle the button. when true it will toggle one way and if false the other way
//lastly we add the onClick in the button by calling the handclick function
