import React, { useState } from 'react';
import '../pages/style.css';

export default function Counter(props) {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter+1);
  }
  function nullify() {
    setCounter(0);
  }
  return <div>
  <p>{counter}</p>
  <button onClick={increment}>Increment</button>
  <p/>
  <button onClick={nullify}>nullify</button>
  {props.hcounter}
  </div>;
}
