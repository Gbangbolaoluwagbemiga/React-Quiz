function NextButton({dispatch, answer, index, numQuest}) {
  if (answer === null) return;

  if (index < numQuest - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({type: 'nextQuestion'})}
      >
        Next
      </button>
    );
}

export default NextButton;
