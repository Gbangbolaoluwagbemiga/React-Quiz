import {useState} from 'react';
import DateCounter from './DateCounter';

function App() {
  const [nums, setNums] = useState(5);

  return (
    <div className="">
      <DateCounter />
    </div>
  );
}

export default App;
