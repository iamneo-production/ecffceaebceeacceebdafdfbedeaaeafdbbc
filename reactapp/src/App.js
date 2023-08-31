import React from 'react';
import './index.css';
import Button from './components/UI/Button/Button';
import Card  from './components/UI/Card/Card';
import Banner from './components/UI/Banner/Banner';
import {Route, Routes,Link,BrowserRouter} from 'react-router-dom';

//create class component
function App(){
    return (
        <div>
            <h1>Quizz App</h1>
            <button>Start Quiz</button>
        </div>
    );
}
export default App;