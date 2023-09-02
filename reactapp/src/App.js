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
        <div style={{textAlign: "center"}}>
            <h1>Quizz App</h1>
            {states.curpage==="strt" ? 
            <button style={{backgroundColor: "#FFBA93",border: "1px solid #FFBA93",padding: "5px",width: "50%"}} onClick={()=>setStates({...states,curpage: "quiz"})}>Start Quiz</button> : ""
            }
            <Banner question={states.questions[0].Question} tag="1" options={states.questions[0].Options}/>
            {/* <Button tag="1" choice="1" name="hlo" content="Start Quiz" isdisabled="" onclick={setAns}/> */}
        </div>
    )
}
export default App;