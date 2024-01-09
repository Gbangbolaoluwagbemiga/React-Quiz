import {createContext, useContext, useEffect, useReducer} from 'react';
import data from '../components/questions';

const QuizContext = createContext();

const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  countDown: null,
};
const secPerQuestion = 20;
const {questions: questApi} = data;

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {...state, questions: action.payload, status: 'ready'};

    case 'dataFailed':
      return {...state, status: 'error'};

    case 'start':
      return {
        ...state,
        status: 'active',
        countDown: state.questions.length * secPerQuestion,
      };

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
        questions: state.questions,
      };
    case 'tick':
      return {
        ...state,
        countDown: state.countDown - 1,
        status: state.countDown === 0 ? 'finish' : state.status,
      };

    default:
      throw new Error('Something went wrong');
  }
}

function QuizProvider({children}) {
  const [
    {questions, status, index, answer, points, highscore, countDown},
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuest = questions.length;

  useEffect(function () {
    setTimeout(() => {
      dispatch({type: 'dataReceived', payload: questApi});
    }, 1500);
  }, []);

  const totalPoints = questions
    .map(cur => cur.points)
    .reduce((acc, cur) => acc + cur, 0);
  return (
    <QuizContext.Provider
      value={{
        numQuest,
        status,
        index,
        answer,
        points,
        highscore,
        countDown,
        totalPoints,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function UseQuiz() {
  const context = useContext(QuizProvider);
  if (context === undefined)
    throw new Error(`context used outside the Quiz context scope`);
  return context;
}

export {QuizProvider, UseQuiz};
