import {useEffect} from 'react';
import {UseQuiz} from '../context/QuizContext';

function Timer() {
  const {dispatch, countDown} = UseQuiz();
  const mins = Math.floor(countDown / 60);
  const sec = countDown % 60;

  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({type: 'tick'});
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && '0'}
      {mins} : {sec < 10 && '0'}
      {sec}
    </div>
  );
}

export default Timer;
