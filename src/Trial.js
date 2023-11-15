import {useState} from 'react';

export default function Arithmetic({newNum}) {
  const [externalNo, setExternalNo] = useState(4);
  const results = 4 * externalNo;

  return <>{newNum(results)} HIIIIIIIIIIIIII</>;
}
