import {useState} from 'react';
import './App.css';
import Arithmetic from './Trial';

function App() {
  const [nums, setNums] = useState(5);
  console.log(nums);
  return (
    <div className="App">
      <Arithmetic newNum={setNums} />
    </div>
  );
}

export default App;
