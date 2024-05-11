import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [power, setPower] = useState("");
  const [display, setDisplay] = useState(false);

  return (
    <div className="App">
      <div>
      <h1>Build A Hero</h1>
      <label htmlFor="">Name: </label>
      <input type="text" style={{ margin: 10 }} onChange={(event) => {setName(event.target.value)}} />
      <label htmlFor="">Age: </label>
      <input type="number" style={{ margin: 10 }} onChange={(event) => {setAge(event.target.value)}} />
      <label htmlFor="">Height: </label>
      <input type="number" style={{ margin: 10 }} onChange={(event) => {setHeight(event.target.value)}} />
      <label htmlFor="">SuperPower: </label>
      <input type="text" style={{ margin: 10 }} onChange={(event) => {setPower(event.target.value)}} />
      </div>
      <button onClick={()=>{
        setDisplay(true);
      }}>Display Character</button>
      <div>
        <h1>Hero Info</h1>
        {display && (
          <ul>
            <li>{name}</li>
            <li>{age}</li>
            <li>{height}</li>
            <li>{power}</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
