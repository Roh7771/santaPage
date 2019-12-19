import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/animate.css';
import './styles/loaders.css';
import './App.css';
import MainPage from './components/MainPage/MainPage'
import Question from './components/Question/Question';
import LastPage from './components/LastPage/LastPage';
import Warning from './components/Warning/Warning';

function App() {
  const [showQuest, setShowQuest] = useState(false);
  const [showWarning] = useState(localStorage.getItem('test-1'));
  const [answer, setAnswer] = useState('Железо');
  const [showMain, setShowMain] = useState(true);
  const [lastPageState, setLastPageState] = useState({ show: false, isLoadingData: false });
  const startHandler = () => {
    setShowQuest(true);
    setShowMain(false);
  }


  const answerHandler = () => {
    setLastPageState({ show: true, isLoadingData: true });
    setShowQuest(false);
    fetch('https://santas-server.herokuapp.com/api/v1/answer', {
      body: JSON.stringify({ 
        answer,
        createdAt: Date.now() 
      }),
      headers: { "Content-Type": 'application/json' },
      method: 'POST'
    }).then(
      response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      }
    ).then(
      () => {
        localStorage.setItem('test-1', true);
        setLastPageState(prevState => {
          return { ...prevState, isLoadingData: false }
        })
      }
    ).catch(error => {
      console.log(error);
    });
  }

  const radioHandler = (e) => {
    setAnswer(e.target.value);
  }

  return (
    
    <>
      {showWarning ? <Warning /> : null}
      {showMain && !showWarning ? <MainPage onStart={startHandler} /> : null}
      {showQuest ? <Question answer={answer} onChange={radioHandler} onAnswer={answerHandler} /> : null}
      {lastPageState.show ? <LastPage lastPageState={lastPageState} /> : null}
    </>
  );
}

export default App;
