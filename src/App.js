import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/animate.css';
import './styles/loaders.css';
import './App.css';
import MainPage from './components/MainPage/MainPage'
import Question from './components/Question/Question';
import LastPage from './components/LastPage/LastPage';
import Warning from './components/Warning/Warning';
import { Route, Redirect, useHistory } from 'react-router-dom';

function App() {
  let history = useHistory();
  const [answer, setAnswer] = useState('Олово');
  const [isLoading, setIsLoading] = useState(false);
  
  const startHandler = () => {
    history.push('/question');
  }


  const answerHandler = () => {
    setIsLoading(true);
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
        setIsLoading(false);
        localStorage.setItem('test-4', true);
      }
    ).catch(error => {
      console.log(error);
    });
    history.push('/last');
  }

  const radioHandler = (e) => {
    setAnswer(e.target.value);
  }

  return (
    <>
      <Route path='/'>
        {localStorage.getItem('test-4') ? <Redirect to="/warning" /> : <Route exact path='/'><MainPage onStart={startHandler} /></Route>}
      </Route>
      <Route exact path='/question'>
        <Question answer={answer} onChange={radioHandler} onAnswer={answerHandler} />
      </Route>
      <Route exact path='/last'>
        <LastPage isLoading={isLoading} />
      </Route>
      <Route exact path='/warning'>
        <Warning />
      </Route>
    </>
  );
}

export default App;
