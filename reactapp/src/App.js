import {useState} from "react";
import Button from "./components/UI/Button/Button";
import Banner from "./components/UI/Banner/Banner";
function App(){
    var [states,setStates]=useState({
        curpage: "strt",
        tot_cor_ans: 0,
        attempted: 0,
        questions: [
            {
                Question: "Who is the father of nation ?",
                Options: ["Nehru","Gandhi","Ambedkar","Bose"],
                correctAns: "2",
                isDisabled: ""
            },
            {
                Question: "What color is are the leaves ?",
                Options: ["Blue","Red","Yellow","Green"],
                correctAns: "4",
                isDisabled: ""
            },
            {
                Question: "What color is the sky ?",
                Options: ["Blue","Red","Yellow","Green"],
                correctAns: "1",
                isDisabled: ""
            },
            {
                Question: "What color is the fire ?",
                Options: ["Blue","Red","Yellow","Green"],
                correctAns: "3",
                isDisabled: ""
            },
        ]
    });
    const setAns=(qno,op_no)=>{
        var prv=states.tot_cor_ans;
        var prv_ques=states.questions;
        for(var i=0;i<prv_ques.length;i++){
            if(i===qno){
                prv_ques[i].isDisabled="true";
            }
        }
        if(states.questions[qno].correctAns===op_no){
        prv+=1;
        }
        setStates({...states,tot_cor_ans: prv,prv_ques,attempted: });
        console.log(states.questions,op_no,qno);
    }
    return (
        <div >
            <h1 style={{textAlign: "center"}}>Quizz App</h1>
            <p>{states.tot_cor_ans}</p>
            {states.curpage==="strt" ? 
            <button style={{backgroundColor: "#FFBA93",border: "1px solid #FFBA93",padding: "5px",width: "35%",height: "45px"}} onClick={()=>setStates({...states,curpage: "quiz"})}>Start Quiz</button> : ""
            }
            <Banner question={states.questions[0].Question} tag="1" options={states.questions[0].Options} setAns={setAns} isDisabled={states.questions[0].isDisabled}/>
            <Banner question={states.questions[1].Question} tag="2" options={states.questions[1].Options} setAns={setAns} isDisabled={states.questions[1].isDisabled}/>
            <Banner question={states.questions[2].Question} tag="3" options={states.questions[2].Options} setAns={setAns} isDisabled={states.questions[2].isDisabled}/>
            <Banner question={states.questions[3].Question} tag="4" options={states.questions[3].Options} setAns={setAns} isDisabled={states.questions[3].isDisabled}/>
            {/* <Button tag="1" choice="1" name="hlo" content="Start Quiz" isdisabled="" onclick={setAns}/> */}
        </div>
    )
}
export default App;