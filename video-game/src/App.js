import {useState,useEffect} from 'react';
import './App.css';

function App() {

  const [gameTitle,setGameTitle]=useState('');
  const [searchedGame,setSearchedGame]=useState([]);
  const searchGame=()=>{

  }
  useEffect(()=>{

  },[]);
  return (
    <div className="App">
     <div className="searchSection">
      <h1>Search For A Game</h1>
      <input type="text" placeholder="Minecraft" onChange={(e)=>{setGameTitle(e.target.value)}}/>
      <button onClick={searchGame}>Search Game Title</button>
     <div className="games">

      {searchedGame.map((game,key)=>{
        return <div className="game" key={key}>
          {game.external}
          <img src="{game.thumb}" alt="" />
          {game.cheapest}
        </div>
      })}
     </div>
     </div> 
     <div className="dealsSection">
      <h1>Latest Deals</h1>
     </div>
     
    </div>
  );
}

export default App;
