import '../styles/Checker.css';


const Checker = ({quiz, nextQuestion, choosen})=>{
    const questionsAlphabets = ["A", "B", "C", "D"];
    return <>
    {
        quiz.choosenQuestions.map((element, index) => {
            return <div  key={`c${questionsAlphabets[index]}`} className={`checker-element${quiz.correctAnswer.name === element.name ? ' correct-answer' : (choosen === index) ? ' wrong-answer' : ''}`} >
            <p className="question-element-alaphabet">{questionsAlphabets[index]}</p>
                    <p className="question-element-value">{element.name}</p>
                    <span className="icons material-symbols-rounded">
                        {
                            quiz.correctAnswer.name === element.name ? 'check_circle' : (choosen === index) ? 'cancel' : ''  
                        }
                    </span>
            </div>
        })
    }
    <div className="btn-container">
        <button className='next-button' onClick={()=>{
            nextQuestion();
        }}>Next</button>
    </div>
    </>;
}

export default Checker;