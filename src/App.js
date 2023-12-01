import {useEffect} from 'react';
import Header from './Header';
import Main from './Main';

function App() {
  useEffect(function () {
    async function fetcher() {
      try {
        const res = await fetch('http://localhost:8000/questions');
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetcher();
  }, []);
  return (
    <div className="">
      <Header />
      <Main className="main">
        <p>1/15</p>
        <p>Question</p>
      </Main>
    </div>
  );
}

export default App;
