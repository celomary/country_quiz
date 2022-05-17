import { useState, useEffect } from "react";
import Quiz from "../utils/Quiz";
import Question from "./Question";
import Checker from "./Checker";
import '../styles/Handler.css';
import undraw from '../images/undraw_adventure_4hum 1.svg';

const CapitalQuestion = (capital)=> {
    return <div className="question">
     <p className="question-text">{`${capital} is the capital of`}</p>
    </div>;
} 

const FlagQuestion = (flagImage) => {
    return <div className="question">
        <img className="question-image" alt="flag" src={flagImage} />
        <p className="question-text">Which country does this flag belong to?</p>
    </div>
}

const Handler = ({flag, capital, setTotal, questionNumber, setQuestionNumber})=>{
    const [qType, setqType] = useState(-1);
    const [quiz, setQuiz] = useState(null);
    const [choosen, setChoosen] = useState(-1);

    useEffect(()=>{
        if (capital && flag)
        {
            const number = Quiz.getRandomNumber(0, 100) % 2;
            setqType(()=> number);
            setQuiz(()=> {
                const q = new Quiz([flag, capital][number])
                q.generate();
                return q;
            });
        }
    }, [flag, capital, questionNumber]);

    const correctAnswerChecker = (choosenAnswerIndex) =>{
        if (quiz.choosenQuestions[choosenAnswerIndex].name === quiz.correctAnswer.name)
            setTotal(total => total + 1);
        setChoosen(choosenAnswerIndex);
    }
    const nextQuestion = ()=>{
        setQuestionNumber(questionNumber => questionNumber + 1);
        setChoosen(-1);
    }
    if (!quiz)
    {
        return <div className="loader">
            <span className="material-symbols-rounded">
                autorenew
                </span>
        </div>
    }
    return <div className='handler'>
        <h1>COUNTRY QUIZ</h1>
        <div className="handler-body">
            <img src={undraw} alt="world undraw image" />
            {
                (qType === 0) ? FlagQuestion(quiz.correctAnswer.flag) : CapitalQuestion(quiz.correctAnswer.capital)
            }
            {
                (choosen === -1 ? <Question quiz={quiz} checkAnswer={correctAnswerChecker} /> : <Checker quiz={quiz} nextQuestion={nextQuestion} choosen={choosen} />)
            }
        </div>
    </div>
}

export default Handler;