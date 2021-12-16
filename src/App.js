import React from 'react'
import {useState} from 'react'
import './style.css'
function App() {

  const [blub,setblub] = useState(false)
  const makeBlubOn = () => {
    setblub(true)
    

  }
  const makeBlubOff = () => {
    setblub(false)

  }
  return (
    <div className='container'>
      <center>
      <h1 className='h1'>The Bulb Show</h1>
        {
          blub===true? <img width='300px' height='300px' src='https://previews.123rf.com/images/murika/murika1511/murika151100069/48123160-bright-glowing-incandescent-light-bulb-on-a-white-background.jpg' alt='not found'/> :<img width='300px' height='300px' src='https://previews.123rf.com/images/ericmilos/ericmilos0912/ericmilos091200136/6109526-3d-render-of-light-bulb-on-white.jpg' alt='not found' />
    
        }
        <br></br><br></br>
            <button className='On' onClick={makeBlubOn}>Blub ON</button><br></br>
            <button className='Off' onClick={makeBlubOff}>Blub OFF</button><br></br>
      </center>
    </div>
  )
}

export default App
