import React, { useCallback, useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState([]);

  const increment = () => {
    setCounterOne(counterOne + 1);
  };

  const fun = useCallback(() => {
    console.log("hello world");
  }, counterTwo);
  return (
    <div>
      <Child counterTwo={counterTwo} fun={fun} />
      <button onClick={increment}>Increment - {counterOne}</button>
    </div>
  );
}
