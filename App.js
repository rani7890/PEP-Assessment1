import './App.css';
import { useState} from 'react';
import './Components/Welcome.css';

import Welcome from './Components/Welcome';

function App() {
  const [name, setName] = useState("")
  const [login, setLogin] = useState(false)
  return (
    <div>
      <div class= "conatiner">
        <label>Enter your Name</label>
        <input
        placeholder='Enter name'
        value={name}
        onChange={(event)=>{setName(event.target.value)}}></input>
      </div>
      <div className='exp1'><button onClick={()=>{setLogin(!login)}}>Login</button></div>
      {(login && name ) && <Welcome name={name} ></Welcome>}
      <div class= 'par'>
      <p> Assignment done by Nisha Rani 12015084</p>
      </div>
      

    </div>
  
  );
}

export default App;
