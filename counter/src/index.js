import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter+1);
  }
  return <div>
  <p>{counter}</p>
  <button onClick={increment}>+1</button>
  </div>;
}

const el = <Counter />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);