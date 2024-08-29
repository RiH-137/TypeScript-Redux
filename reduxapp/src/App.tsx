import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useAppSelector} from './redux/hooks';
import { useAppDispatch } from './redux/hooks';
import { increment, decrement } from './redux/slices/counter';
import MyComp from './MyComp';

function App() {

  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h2> Count is {count}</h2>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        
      </header>
      <MyComp/>
    </div>
  );
}

export default App;
