function FinishQuiz({points, totalPoints}) {
  const percentage = (points / totalPoints) * 100;

  return (
    <div>
      <p className="result">
        You scored <strong>{points}</strong> out of {totalPoints} (
        {Math.ceil(percentage)}%)
      </p>
    </div>
  );
}

export default FinishQuiz;
