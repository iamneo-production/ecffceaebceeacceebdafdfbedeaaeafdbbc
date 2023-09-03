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
            if(i==tag-1){
            prv_ques[i].isDisabled=true;
            break;
            }
        }
        setStates({...states,tot_cor_ans: prv_ans,prv_ques,attempted: prv_att+1});
    }
    const mockFunction=()=>{}
    return (
        <div className="maindiv">
            <h1 style={{textAlign: "center"}}>Quizz App</h1>
            <p>{states.tot_cor_ans}</p>
            {states.curpage==="strt" ? 
            <button style={{backgroundColor: "#FFBA93",border: "1px solid #FFBA93",padding: "5px",width: "35%",height: "45px"}} onClick={()=>setStates({...states,curpage: "quiz"})}>Start Quiz</button> 
            : <div className="Quiz">
            <Card 
            
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
            <Card 
            
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
            
            question={states.questions[2].question}
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
            
            question={states.questions[3].question}
            correctAnswerMarkUpdate={setAns}
            options={{
            option1: states.questions[3].option1,
            option2: states.questions[3].option2,
            option3: states.questions[3].option3,
            option4: states.questions[3].option4
            }}
            answer={states.questions[3].answer}
            />
            <Card 
            
            question={states.questions[0].question}
            correctAnswerMarkUpdate={setAns}
            attempt={mockFunction}
            options={{
            option1: states.questions[4].option1,
            option2: states.questions[4].option2,
            option3: states.questions[4].option3,
            option4: states.questions[4].option4
            }}
            answer={states.questions[0].answer}
            />             
            {(states.attempted>=5) ? <Button tag="1" choice="1" name="hlo" content="Show Results" isdisabled="" onclick={()=>{setStates({...states,curpage: "strt"})}}/>  : ""}
            </div>
            }
            
            {/* <Button tag="1" choice="1" name="hlo" content="Start Quiz" isdisabled="" onclick={setAns}/> */}
        </div>
    )
}
export default App;