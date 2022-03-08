import {useState} from 'react';
import ShowMax from './ShowMax';


function Counter() {
    const [myCounter, setMyCounter] = useState(0);

    function incrementCounter(){
        setMyCounter(myCounter+1)
    }
    function decrementCounter(){
        if (myCounter == 0) return
        setMyCounter(myCounter-1)
    }

  return (
    <>
      <span>HELLO WORLD</span>
      <span>{myCounter}</span>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <ShowMax counter={myCounter} />
    </>
  );
}

export default Counter;