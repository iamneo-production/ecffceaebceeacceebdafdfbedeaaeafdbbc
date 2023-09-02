import {useState} from "react";
import Button from "./components/UI/Button/Button";
function App(){
    var [states,setStates]=useState({
        curpage: "strt",
        correctAnswer: 0,
        questions: [
            {
                "Question": "Who is the father of nation?",
                
            }
        ]
    });
    function setAns(qno){

        if(states.qno[qno].correctAns===curans){
        setStates({...states,correctAnswer: 1});
        }
    }
    return (
        <div>
            <h1>Quizz App</h1>
            <Button name="hlo" content="123" isdisabled="true" onClick={this.setAns(1)}/>
        </div>
    )
}
export default App;