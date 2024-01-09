import {UseQuiz} from '../context/QuizContext';

function ProgressBar() {
  const {index, numQuest, points, answer, totalPoints} = UseQuiz();
  return (
    <header className="progress">
      <progress max={numQuest} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index}</strong>/ {numQuest}
      </p>
      <p>
        <strong>{points}</strong>/{totalPoints}
      </p>
    </header>
  );
}

export default ProgressBar;
