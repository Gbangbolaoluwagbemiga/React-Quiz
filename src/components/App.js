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
import FinishQuiz from './FinishQuiz';
import Footer from './Footer';
import Timer from './Timer';

const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
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

    case 'completed':
      return {
        ...state,
        status: 'finish',
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case 'reset':
      return {
        ...initialState,
        status: 'ready',
        question: state.questions,
      };

    default:
      throw new Error('Something went wrong');
  }
}

function App() {
  const [{questions, status, index, answer, points, highscore}, dispatch] =
    useReducer(reducer, initialState);

  useEffect(function () {
    setTimeout(() => {
      dispatch({type: 'dataReceived', payload: questApi});
    }, 1500);
  }, []);

  const totalPoints = questions
    .map(cur => cur.points)
    .reduce((acc, cur) => acc + cur, 0);

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
              totalPoints={totalPoints}
            />

            <Question
              dispatch={dispatch}
              answer={answer}
              question={questions[index]}
            />
            <Footer>
              <Timer />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuest={questions.length}
              />
            </Footer>
          </>
        )}
        {status === 'finish' && (
          <FinishQuiz
            totalPoints={totalPoints}
            points={points}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
