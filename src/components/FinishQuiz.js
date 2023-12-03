function FinishQuiz({points, maxPoints}) {
  const percentage = ({points} / {maxPoints}) * 100;
  return (
    <div>
      <p>
        You scored <strong>{points}</strong> out of {maxPoints}{' '}
        {Math.ceil(percentage)}
      </p>
    </div>
  );
}

export default FinishQuiz;
