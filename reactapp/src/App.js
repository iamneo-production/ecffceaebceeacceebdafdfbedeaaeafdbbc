import {useState} from "react";
import Button from "./components/UI/Button/Button";
function App(){
    var states,setState=useState({
        curpage: "strt",
        correctAnswer: 0,

    });
    function setAns(qno,curans){
        if(states.qno[qno].correctAns==curans){
        setState({...states,correctAnswer: 1});
        }
    }
    return (
        <div>
            <h1>Quizz App</h1>
            <div>Correct Ans {states.correctAns}</div>
            <Button name="button" content="Start Quiz"/>
        </div>
    )
}
export default App;