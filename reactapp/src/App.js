import {useState} from "react";
import Button from "./components/UI/Button/Button";
import Card from "./components/UI/Card/Card";
function App(){
    var [states,setStates]=useState({
        curpage: "strt",
        tot_cor_ans: 0,
        retry: 0,
        attempted: 0,
        questions: [
            {
                questionId : 1,
                question : "Who is the father of nation ?",
                option1 : "Nehru",
                option2 : "Gandhi",
                option3 : "Ambedkar",
                option4 : "Bose",
                answer : "Gandhi",
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
                questionId : 3,
                question : "What color is the sky ?",
                option1 : "Blue",
                option2 : "Red",
                option3 : "Yellow",
                option4 : "Green",
                answer : "Blue",
                isDisabled: ""
            },
            {
                questionId : 4,
                question : "What color is the sky ?",
                option1 : "Blue",
                option2 : "Red",
                option3 : "Yellow",
                option4 : "Green",
                answer : "Blue",
                isDisabled: ""
            },
            {
                questionId : 5,
                question : "What color is the fire ?",
                option1 : "Blue",
                option2 : "Red",
                option3 : "Yellow",
                option4 : "Green",
                answer : "Yellow",
                isDisabled: ""
            }
        ]
    });
    const setAns=(tag,choice,ans)=>{
        let prv_ans=states.tot_cor_ans;
        let prv_att=states.attempted;
        let prv_ques=states.questions;
        if(choice===ans){
        prv_ans+=1;
        }
        for(let i=0;i<5;i++)
        {
            if(i===tag-1){
            prv_ques[i].isDisabled=true;
            }
        }
        console.log(prv_ques);
        setStates({...states,tot_cor_ans: prv_ans,questions: prv_ques,attempted: prv_att+1});
    }
    const mockFunction=()=>{}
    const initialise=()=>{
        let prv_ques=states.questions;
        for(let i=0;i<5;i++){
            prv_ques[i].isDisabled="";
        }
        setStates({...states,curpage: "quiz",questions: prv_ques,attempted: 0,tot_cor_ans: 0});
    }
    return (
        <div className="maindiv">
            <h1 style={{textAlign: "center"}}>Quizz App</h1>
            {(states.curpage==="strt") ? 
            <div>
                {(states.retry==1) ? <div>You scored {states.tot_cor_ans}/5 correctly</div> : ""}
                <button style={{backgroundColor: "#FFBA93",border: "1px solid #FFBA93",padding: "5px",width: "35%",height: "45px"}} onClick={()=>{initialise()}}>Start Quiz</button> 
            </div>
            :
            <div className="Quiz">
            <Card 
            qno={states.questions[0].questionId}
            question={states.questions[0].question}
            correctAnswerMarkUpdate={setAns}
            attempt={mockFunction}
            isDisabled= {states.questions[0].isDisabled}
            options={{
            option1: states.questions[0].option1,
            option2: states.questions[0].option2,
            option3: states.questions[0].option3,
            option4: states.questions[0].option4
            }}
            answer={states.questions[0].answer}
            />   
            <Card 
            qno={states.questions[1].questionId}
            isDisabled= {states.questions[1].isDisabled}
            question={states.questions[1].question}
            correctAnswerMarkUpdate={setAns}
            attempt={mockFunction}
            options={{
            option1: states.questions[1].option1,
            option2: states.questions[1].option2,
            option3: states.questions[1].option3,
            option4: states.questions[1].option4
            }}
            answer={states.questions[1].answer}
            />
            <Card 
            qno={states.questions[2].questionId}
            question={states.questions[2].question}
            isDisabled= {states.questions[2].isDisabled}
            correctAnswerMarkUpdate={setAns}
            attempt={mockFunction}
            options={{
            option1: states.questions[2].option1,
            option2: states.questions[2].option2,
            option3: states.questions[2].option3,
            option4: states.questions[2].option4
            }}
            answer={states.questions[2].answer}
            />
            <Card 
            qno={states.questions[3].questionId}
            question={states.questions[3].question}
            correctAnswerMarkUpdate={setAns}
            isDisabled= {states.questions[3].isDisabled}
            options={{
            option1: states.questions[3].option1,
            option2: states.questions[3].option2,
            option3: states.questions[3].option3,
            option4: states.questions[3].option4
            }}
            answer={states.questions[3].answer}
            />
            <Card 
            qno={states.questions[4].questionId}
            question={states.questions[4].question}
            isDisabled= {states.questions[4].isDisabled}
            correctAnswerMarkUpdate={setAns}
            attempt={mockFunction}
            options={{
            option1: states.questions[4].option1,
            option2: states.questions[4].option2,
            option3: states.questions[4].option3,
            option4: states.questions[4].option4
            }}
            answer={states.questions[4].answer}
            />             
            {(states.attempted>=5) ? <Button tag="1" choice="1" name="hlo" isdisabled="" onclick={()=>{setStates({...states,curpage: "strt",retry: 1})}}>Show Results</Button>  : ""}
            </div>
            }
            
        </div>
    )
}
export default App;