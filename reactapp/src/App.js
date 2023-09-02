import {useState} from "react";
import Button from "./components/UI/Button/Button";
function App(){
    var [states,setStates]=useState({
        curpage: "strt",
        correctAnswer: 0,

    });
    // function setAns(qno,curans){
    //     if(Allstates.qno[qno].correctAns===curans){
    //     setStates({...Allstates,correctAnswer: 1});
    //     }
    // }
    return (
        <div>
            <h1>Quizz App</h1>
            <Button name="hlo" content="123" isdisabled="true"/>
        </div>
    )
}
export default App;