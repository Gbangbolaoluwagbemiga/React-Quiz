function Question({question, dispatch, answer}) {
  const hasAnswer = answer !== null;
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option, index) => (
          <OptBtn
            option={option}
            key={option}
            dispatch={dispatch}
            answer={answer}
            curIndex={index}
            question={question}
            hasAnswer={hasAnswer}
          />
        ))}
      </div>
    </div>
  );
}
function OptBtn({option, dispatch, answer, curIndex, question, hasAnswer}) {
  return (
    <button
      className={` btn btn-option  ${curIndex === answer ? 'answer' : ''} ${
        hasAnswer
          ? curIndex === question.correctOption
            ? 'correct'
            : 'wrong'
          : ''
      }`}
      onClick={() => dispatch({type: 'newAnswer', payload: curIndex})}
      disabled={hasAnswer}
    >
      {option}
    </button>
  );
}

export default Question;
