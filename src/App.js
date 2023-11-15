import {useState} from 'react';
import './App.css';
import Arithmetic from './Trial';

function App() {
  const [nums, setNums] = useState(5);
  console.log(nums);
  return (
    <div className="App">
      <Arithmetic newNum={setNums} /> *16
    </div>
  );
}

export default App;
