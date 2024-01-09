import {createContext, useContext} from 'react';

const QuizContext = createContext();

function QuizProvider({children}) {
  return <QuizContext.Provider value={{}}>{children}</QuizContext.Provider>;
}

function UseQuiz() {
  const context = useContext(QuizProvider);
  if (context === undefined)
    throw new Error(`context used outside the Quiz context scope`);
  return context;
}

export {QuizProvider, UseQuiz};
