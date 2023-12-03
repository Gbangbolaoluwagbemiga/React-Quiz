import {useEffect} from 'react';
import {useReducer} from 'react';
import Header from './Header';
import Loader from './Loader';
import Error from './Error';
import StartScreen from './startScreen';
import Main from './Main';
import NextButton from './NextButton';
import data from './questions';
import Question from './Question';
import ProgressBar from './ProgressBar';

const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
};
const {questions: questApi} = data;

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {...state, questions: action.payload, status: 'ready'};

    case 'dataFailed':
      return {...state, status: 'error'};

    case 'start':
      return {...state, status: 'active'};

    case 'newAnswer':
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case 'nextQuestion':
      return {...state, index: state.index + 1, answer: null};

    default:
      throw new Error('Something went wrong');
  }
}

function App() {
  const [{questions, status, index, answer, points}, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    dispatch({type: 'dataReceived', payload: questApi});
  }, []);

  return (
    <div className="app">
      <Header />
      <Main className="main">
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen numQuest={questions.length} dispatch={dispatch} />
        )}
        {status === 'active' && (
          <>
            <ProgressBar
              numQuest={questions.length}
              index={index + 1}
              points={points}
              questions={questions}
              answer={answer}
            />

            <Question
              dispatch={dispatch}
              answer={answer}
              question={questions[index]}
            />
            <NextButton dispatch={dispatch} answer={answer} />
          </>
        )}
      </Main>
    </div>
  );
}

export default App;
