import React, { useState } from 'react';


function App() {
  const [ count, setCount ] = useState(0);

  const increment = () => {
    return setCount( count + 1 );
  }

  const decrement = () => {
    return setCount( count - 1 );
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
