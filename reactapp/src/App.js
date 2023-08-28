import logo from './logo.svg';
import './App.css';
import {useState} from "react";
function App() {
  var [choice,changeChoice]=useState(0);
  return (
    <div>
      <h1 style={{"textAlign": "center"}}>Quizz App</h1>
      <div id="main">
      {
      (choice==0)? (<button className="buttons" style={{"fontWeight": "bold"}} onClick={()=>{changeChoice(choice+1);}}>Start Quiz</button>) : (<h1>Hello</h1>)
      }
      </div>
    </div>
  );
}
export default App;
