import {useState} from "react";
import Button from "./components/UI/Button/Button";
import Banner from "./components/UI/Banner/Banner";
function App(){
    var [states,setStates]=useState({
        curpage: "strt",
        tot_cor_ans: 0,
        questions: [
            {
                Question: "Who is the father of nation?",
                Options: ["Nehru","Gandhi","Ambedkar","Bose"],
                correctAns: "4"
            },
            {
                Question: "Who is the father of nation?",
                Options: ["Nehru","Gandhi","Ambedkar","Bose"],
                correctAns: "4"
            },
            {
                Question: "Who is the father of nation?",
                Options: ["Nehru","Gandhi","Ambedkar","Bose"],
                correctAns: "4"
            },
            {
                Question: "Who is the father of nation?",
                Options: ["Nehru","Gandhi","Ambedkar","Bose"],
                correctAns: "4"
            },
            {
                Question: "Who is the father of nation?",
                Options: ["Nehru","Gandhi","Ambedkar","Bose"],
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
        <div >
            <h1 style={{textAlign: "center"}}>Quizz App</h1>
            {states.curpage==="strt" ? 
            <button style={{backgroundColor: "#FFBA93",border: "1px solid #FFBA93",padding: "5px",width: "35%",height: "45px"}} onClick={()=>setStates({...states,curpage: "quiz"})}>Start Quiz</button> : ""
            }
            <Banner question={states.questions[0].Question} tag="1" options={states.questions[0].Options}/>
            <Banner question={states.questions[1].Question} tag="2" options={states.questions[1].Options}/>
            <Banner question={states.questions[2].Question} tag="3" options={states.questions[2].Options}/>
            <Banner question={states.questions[3].Question} tag="4" options={states.questions[3].Options}/>
            {/* <Button tag="1" choice="1" name="hlo" content="Start Quiz" isdisabled="" onclick={setAns}/> */}
        </div>
    )
}
export default App;