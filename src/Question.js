function Question({question}) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map(option => (
          <OptBtn option={option} key={option} />
        ))}
      </div>
    </div>
  );
}
function OptBtn({option}) {
  return <button className="btn btn-option">{option}</button>;
}

export default Question;
