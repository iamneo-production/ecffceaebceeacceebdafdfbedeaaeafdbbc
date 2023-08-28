import logo from './logo.svg';
import './App.css';
import {useState} from "react";
function App() {
  var [choice,changeChoice]=useState(0);
  return (
    <div>
      <h1 style={{"text-align": "center"}}>Quiz App</h1>
      <div id="main">
      <button class="buttons" style={{"font-weight": "bold"}} onClick={()=>{changeChoice(choice+1);}}>Start Quiz</button>
      </div>
    </div>
  );
}

export default App;
