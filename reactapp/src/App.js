import {useState} from "react";
import Button from "./components/UI/Button/Button";
function App(){
    var Allstates,setStates=useState({
        curpage: "strt",
        correctAnswer: 0,

    });
    function setAns(qno,curans){
        if(states.qno[qno].correctAns==curans){
        setStates({...states,correctAnswer: 1});
        }
    }
    return (
        <div>
            <h1>Quizz App</h1>
            <div>Correct Ans {Allstates.}</div>
        </div>
    )
}
export default App;