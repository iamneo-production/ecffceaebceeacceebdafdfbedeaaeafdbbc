import {useState} from "react";
import Button from "./components/UI/Button/Button";
import Card from "./components/UI/Card/Card";
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
                questionId : 2,
                question : "What color is are the leaves ?",
                option1 : "Blue",
                option2 : "Red",
                option3 : "Yellow",
                option4 : "Green",
                answer : "Green",
                isDisabled: ""
            },
            {
                questionId : 2,
                question : "What color is the sky ?",
                option1 : "Blue",
                option2 : "Red",
                option3 : "Yellow",
                option4 : "Green",
                answer : "Blue",
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
            }
            
        ]
    });
    const setAns=(qno,op_no)=>{
        let prv_ans=states.tot_cor_ans;
        let prv_att=states.attempted;
        let prv_ques=states.questions;
        if(states.questions[qno].answer===op_no){
        prv_ans+=1;
        }
        setStates({...states,tot_cor_ans: prv_ans,prv_ques,attempted: prv_att+1});
        console.log(states.attempted);
    }
    return (
        <div >
            <h1 style={{textAlign: "center"}}>Quizz App</h1>
            <p>{states.tot_cor_ans}</p>
            {states.curpage==="strt" ? 
            <button style={{backgroundColor: "#FFBA93",border: "1px solid #FFBA93",padding: "5px",width: "35%",height: "45px"}} onClick={()=>setStates({...states,curpage: "quiz"})}>Start Quiz</button> 
            : <div>
            <Card 
            key={states.questions[0].questionId}
            question={states.questions[0].question}
            correctAnswerMarkUpdate={setAns}
            attempt={mockFunction}
            options={{
            option1: states.questions[0].option1,
            option2: states.questions[0].option2,
            option3: states.questions[0].option3,
            option4: states.questions[0].option4
            }}
            answer={states.questions[0].answer}
            />                
            {/* <Card question={states.questions[0].Question} tag="1" options={states.questions[0].Options} setAns={setAns} isDisabled={states.questions[0].isDisabled}/>
            <Card question={states.questions[1].Question} tag="2" options={states.questions[1].Options} setAns={setAns} isDisabled={states.questions[1].isDisabled}/>
            <Card question={states.questions[2].Question} tag="3" options={states.questions[2].Options} setAns={setAns} isDisabled={states.questions[2].isDisabled}/>
            <Card question={states.questions[3].Question} tag="4" options={states.questions[3].Options} setAns={setAns} isDisabled={states.questions[3].isDisabled}/>
            <Card question={states.questions[4].Question} tag="4" options={states.questions[4].Options} setAns={setAns} isDisabled={states.questions[4].isDisabled}/> */}
            {(states.attempted>=5) ? <Button tag="1" choice="1" name="hlo" content="Show Results" isdisabled="" onclick={()=>{setStates({...states,curpage: "strt"})}}/>  : ""}
            </div>
            }
            
            {/* <Button tag="1" choice="1" name="hlo" content="Start Quiz" isdisabled="" onclick={setAns}/> */}
        </div>
    )
}
export default App;