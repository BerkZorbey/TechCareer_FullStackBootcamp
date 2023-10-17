import { number } from 'prop-types';
import './App.css';
import { useState } from "react";

function App() {
  const [dimensions, setdimensions] = useState({
    width:100,
    height:100
  })
  console.log(dimensions);
  const calc = () => {
    setdimensions({
      ...dimensions
    })
  }
  return (
    <>
    <label>Width</label>
    <input type="number" name="width" onChange={(e)=>dimensions.width = e.target.valueAsNumber }></input>
    
    <label>Height</label>
    <input type="number" name="height" onChange={(e)=> dimensions.height = e.target.valueAsNumber }></input>

    <button onClick={()=> calc()}>Calculate</button>
    
    <div style={{width:dimensions.width, height:dimensions.height, border:'1px solid #000'}}>


    </div>
    </>
  );
}

export default App;
