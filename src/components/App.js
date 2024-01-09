import Header from './Header';
import Loader from './Loader';
import Error from './Error';
import StartScreen from './startScreen';
import Main from './Main';
import NextButton from './NextButton';
import Question from './Question';
import ProgressBar from './ProgressBar';
import FinishQuiz from './FinishQuiz';
import Footer from './Footer';
import Timer from './Timer';
import {QuizProvider, UseQuiz} from '../context/QuizContext';

function App() {
  const {status} = UseQuiz();
  return (
    <QuizProvider>
      <div className="app">
        <Header />
        <Main className="main">
          {status === 'loading' && <Loader />}
          {status === 'error' && <Error />}
          {status === 'ready' && <StartScreen />}
          {status === 'active' && (
            <>
              <ProgressBar />
              <Question />
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
    </QuizProvider>
  );
}

export default App;
