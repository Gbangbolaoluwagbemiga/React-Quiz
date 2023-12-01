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
        console.log(error);
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
