import { useState } from "react";

export default function Class2() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <div>{number}</div>
      <button onClick={() => setNumber(number + 2)}>+2</button>{" "}
      <button onClick={() => setNumber(number - 1)}>-1</button>{" "}
    </div>
  );
}
