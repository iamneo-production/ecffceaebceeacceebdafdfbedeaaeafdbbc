import {useState} from "react";
import Button from "./components/UI/Button/Button";
function App(){
    var [states,setStates]=useState({
        curpage: "strt",
        tot_cor_ans: 0,
        questions: [
            {
                "Question": "Who is the father of nation?",
                "1":"Nehru",
                "2":"Gandhi",
                "3":"Ambedkar",
                "4":"Bose",
                correctAns: "4"
            }
        ]
    });
    const setAns=(qno,op_no)=>{
        var prv=states.tot_cor_ans;
        if(states.questions[qno].correctAns===op_no){
        setStates({...states,tot_cor_ans: prv+1});

        }
        console.log("Here",qno,states.questions[qno].correctAns,op_no);
    }
    return (
        <div>
            <h1>Quizz App</h1>
            <Button tag="1" choice="1" name="hlo" content="Start Quiz" isdisabled="" Setans={setAns}/>
            <h1>{states.tot_cor_ans}</h1>
        </div>
    )
}
export default App;