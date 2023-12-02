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
            question={question}
          />
        ))}
      </div>
    </div>
  );
}
function OptBtn({option, dispatch, answer, curIndex, question}) {
  return (
    <button
      className={` btn btn-option ${
        curIndex === question.correctOption ? 'correct' : 'wrong'
      } ${curIndex === answer ? 'answer' : ''}`}
      onClick={() => dispatch({type: 'newAnswer', payload: curIndex})}
    >
      {option}
    </button>
  );
}

export default Question;
