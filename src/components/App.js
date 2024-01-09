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
import {QuizProvider} from '../context/QuizContext';

function App() {
  return (
    <QuizProvider>
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
                <Timer dispatch={dispatch} countDown={countDown} />
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
    </QuizProvider>
  );
}

export default App;
