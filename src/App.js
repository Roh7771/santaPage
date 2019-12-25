import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/animate.css';
import './styles/loaders.css';
import './App.css';
import MainPage from './components/MainPage/MainPage'
import Question from './components/Question/Question';
import LastPage from './components/LastPage/LastPage';
import { Route, useHistory, Switch } from 'react-router-dom';

function App() {
  let history = useHistory();
  const [answer, setAnswer] = useState('Олово');
  const [isLoading, setIsLoading] = useState(false);
  
  const startHandler = () => {
    history.push('/santaPage/question');
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
    history.push('/santaPage/last');
  }

  const radioHandler = (e) => {
    setAnswer(e.target.value);
  }

  return (
    <Switch>
      <Route exact path='/santaPage/question'>
        <Question answer={answer} onChange={radioHandler} onAnswer={answerHandler} />
      </Route>
      <Route exact path='/santaPage/last'>
        <LastPage isLoading={isLoading} />
      </Route>
      <MainPage onStart={startHandler} />
    </Switch>
  );
}

export default App;
