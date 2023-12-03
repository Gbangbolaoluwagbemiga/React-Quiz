function ProgressBar({index, numQuest, points, questions, answer}) {
  const totalPoints = questions
    .map(cur => cur.points)
    .reduce((acc, cur) => acc + cur, 0);

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
