import React, { useMemo, useState } from "react";

export default function UseMemo() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const increment = () => {
    setCounterOne(counterOne + 1);
  };
  const decrement = () => {
    setCounterTwo(counterTwo - 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 20000000) i++;
    return counterOne % 2 == 0;
  }, [counterOne]);
  return (
    <div>
      <button onClick={increment}>Increment - {counterOne}</button>
      <span>{isEven ? "even" : "odd"}</span>
      <div>
        <button onClick={decrement}>Decrement - {counterTwo}</button>
      </div>
    </div>
  );
}
