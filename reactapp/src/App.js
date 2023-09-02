import {useState} from "react";
function App(){
    var states,setState=useState({
        curpage: "strt",
        correctAnswer: 0,

    });
    function setAns(qno,curans){
        if(states.qno[qno].correctAns==curans){
        setState({...states,correctAnswer: correctAnswer+1});
        }
    }
    return (
        <div>
            <h1>Quizz App</h1>
            <div>Correct Ans {states.correctAns}</div>
        </div>
    )
}
export default App;