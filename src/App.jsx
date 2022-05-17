import './App.css';
import getCountriesCapital from './api/getCountriesCapital';
import getCountriesFlag from './api/getCountriesFlag';
import {useEffect, useState} from 'react';
import Handler from './components/Handler';
import Result from './components/Result';

function flagFilter(flags)
{
  const filtred = [];
  for (const flag of flags)
  {
    if (flag.flag && flag.flag.length)
        filtred.push(flag);
  }
  return filtred;
}

function capitalFilter(capitals)
{
  const filtred = [];
  for (const capital of capitals)
  {
    if (capital.capital && capital.capital.length)
        filtred.push(capital);
  }
  return (filtred);
}

function App() {
  const [flags, setFlags] = useState(null);
  const [capitals, setCapitals] = useState(null);
  const [total, setTotal] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);

  useEffect(()=>{
   async function setCountriesFlag(){
     const flags = await getCountriesFlag();
     if (flags) setFlags(()=> flagFilter(flags));
   }

   async function setCountriesCapital() {
     const capitals = await getCountriesCapital();
     if (capitals) setCapitals(()=> capitalFilter(capitals));
   }

   setCountriesCapital();
   setCountriesFlag();
  }, []);

  const tryAgain = ()=>{
    setQuestionNumber(0)
    setTotal(0);
  }
  return (
    <div className="App">
      <div className="container">
      {
        (questionNumber < 7) ?
        <Handler capital={capitals} flag={flags} setTotal={setTotal} setQuestionNumber={setQuestionNumber} questionNumber={questionNumber}/>
        : <Result total={total} tryAgain={tryAgain} />
      }
      </div>
      <footer>
        <p>Created by <a href="https://github.com/celomary" target='_blank'>Celomary</a> - devChallenges.io</p>
      </footer>
    </div>
  )
}

export default App
