import {useEffect} from 'react';
import Header from './Header';
import Loader from './Loader';
import Error from './Error';
import StartScreen from './startScreen';
import Main from './Main';
import Question from './Question';
import {useReducer} from 'react';

const initialState = {
  questions: [],
  status: 'loading',
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {...state, questions: action.payload, status: 'ready'};

    case 'dataFailed':
      return {...state, status: 'error'};

    default:
      throw new Error('Something went wrong');
  }
}

function App() {
  const [{questions, status}, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    async function fetcher() {
      try {
        const res = await fetch('http://localhost:8000/questions');
        const data = await res.json();
        dispatch({type: 'dataReceived', payload: data});
      } catch (error) {
        dispatch({type: 'dataFailed'});
      }
    }
    fetcher();
  }, []);
  return (
    <div className="app">
      <Header />
      <Main className="main">
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen numQuest={questions.length} />}
        {status === 'active' && <Question />}
      </Main>
    </div>
  );
}

export default App;
