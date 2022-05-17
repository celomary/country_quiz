import '../styles/Question.css';

const Question = ({quiz, checkAnswer})=>{
    const questionsAlphabets = ["A", "B", "C", "D"];
    return <>
        {
            quiz.choosenQuestions.map((element, index)=> {
                return <div key={`q${questionsAlphabets[index]}`} className="question-element" onClick={()=>{
                    checkAnswer(index);
                }}>
                    <p className="question-element-alaphabet">{questionsAlphabets[index]}</p>
                    <p className="question-element-value">{element.name}</p>
                </div>
            })
        }
    </>
}

export default Question;