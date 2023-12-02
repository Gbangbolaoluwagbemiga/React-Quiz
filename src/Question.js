function Question({question, dispatch, answer}) {
  console.log(question);
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
          />
        ))}
      </div>
    </div>
  );
}
function OptBtn({option, dispatch, answer, curIndex}) {
  return (
    <button
      className="btn btn-option"
      onClick={() => dispatch({type: 'newAnswer', payload: curIndex})}
    >
      {option}
    </button>
  );
}

export default Question;
