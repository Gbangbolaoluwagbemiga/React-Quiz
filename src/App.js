import {useEffect} from 'react';
import Header from './Header';
import Main from './Main';
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
  const [state, dispatch] = useReducer(reducer, initialState);

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
    <div className="">
      <Header />
      <Main className="main">
        <p>1/15</p>
        <p>Question</p>
      </Main>
    </div>
  );
}

export default App;
