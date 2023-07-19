import React, { memo } from "react";

function Child({ counterTwo, setCounterTwo }) {
  console.log("child Component rendered");
  return (
    <div>
      <h1>Child Component</h1>
    </div>
  );
}
export default memo(Child);
