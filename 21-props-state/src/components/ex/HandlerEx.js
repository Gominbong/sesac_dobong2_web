import { useState } from "react";

export default function HandlerEx() {
  let [number, setNumber] = useState("Hello World!");

  return (
    <div>
      <button onClick={() => setNumber((number = "Goodbye World!"))}>
        {number}
      </button>
    </div>
  );
}
