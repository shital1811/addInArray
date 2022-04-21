import {useState} from 'react';
import './App.css';

function App() {
const[state,setState]=useState([]);
const[addArr,setAddArr]=useState([]);
const onChangeValue=(e)=>
{
  console.log("onChange" ,e.target.value);
  setState(e.target.value);

}

  const submit=(e)=>
  {
    e.preventDefault();
    setAddArr(pre=>[...pre,state]);
  }

  
  return (
 
    <div>
        
   <form onSubmit={submit}>
     {
      console.log("addArr" ,addArr)
       }
  
    <input type="text" onChange={onChangeValue}></input>
    <button>submit</button>
  </form>
  <div>
    <ul>
    {addArr.map(data=>
    <li>{data}</li>)}
    </ul>
    </div>

       
       
    </div>
  );
}

export default App;
