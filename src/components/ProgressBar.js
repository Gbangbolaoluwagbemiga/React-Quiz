function ProgressBar({
  index,
  numQuest,
  points,
  questions,
  answer,
  totalPoints,
}) {
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
