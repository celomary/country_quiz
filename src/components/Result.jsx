import winnerImage from '../images/undraw_winners_ao2o 2.svg';
import '../styles/Result.css';

const Result = ({total, tryAgain})=> {
    return <div className="result">
        <h1>COUNTRY QUIZ</h1>
        <div className='result-body'>
            <img src={winnerImage} alt='winner image' />
            <h1>Results</h1>
            <p>You got <span className="total">{total}</span> correct answers</p>
            <button className="try-again-btn" onClick={()=>{
                tryAgain();
            }}>Try again</button>
        </div>
    </div>
}

export default Result;