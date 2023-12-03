function ProgressBar({index, numQuest}) {
  return (
    <header className="progress">
      <p>
        Question <strong>{index}</strong>/ {numQuest}
      </p>
    </header>
  );
}

export default ProgressBar;
