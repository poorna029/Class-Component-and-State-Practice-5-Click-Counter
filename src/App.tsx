import { useState } from 'react';
import './App.css'

function App() {
  const [count , setCount]=useState<number>(0)

  return (
    <>
        
      <div>
        
          <h1>  The Button has been clicked <br />
          <span className="number">{count}</span> times</h1>
            <p>Click the button to increase the count!</p>
           <button className="button" onClick={()=>{setCount((pre)=>pre+1)}} type="button">
             Click Me
           </button>
      </div>
      
      
    </>
  )
}

export default App
