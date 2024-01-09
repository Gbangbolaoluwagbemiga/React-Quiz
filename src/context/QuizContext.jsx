import {createContext, useContext} from 'react';

const QuizContext = createContext();

function QuizProvider({children}) {
  return <QuizContext.Provider value={{}}>{children}</QuizContext.Provider>;
}

function UseQuiz() {
  const context = useContext(QuizProvider);
  return context;
}

export default QuizProvider;
