import { useState, useEffect } from "react";
 

function ShowMax(props) {
  const [numCheck, setNumberCheck] = useState(props.counter);

  useEffect(() => {
    if (props.counter < 11) {
      setNumberCheck(props.counter);
    } else {
      setNumberCheck("you win");
    }
  }, [props.counter]);

  return <div style={{color:'red'}}>{numCheck}</div>;
}

export default ShowMax;
