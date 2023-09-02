import {useState} from "react";
import Button from "./components/UI/Button/Button";
function App(){
    var [states,setStates]=useState({
        curpage: "strt",
        correctAnswer: 0,
        questions: [
            {
                "Question": "Who is the father of nation?",
                "Option1":"Nehru",
                "Option2":"Gandhi",
                "Option3":"Ambedkar",
                "Option4":"Bose",
                "CorrectAns": "4"
            }
        ]
    });
    const setAns=(qno,opno)=>{
        var prv=states.correctAnswer;
        if(states.questions[qno].correctAnswer===opno){
        setStates({...states,correctAnswer: prv+1});
        
        }
        console.log("Here");
    }
    return (
        <div>
            <h1>Quizz App</h1>
            <Button tag="1" name="hlo" content="123" isdisabled="" Setans={setAns()}/>
        </div>
    )
}
export default App;