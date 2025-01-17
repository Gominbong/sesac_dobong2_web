import { useState } from "react";

export default function HandlerEx3() {
  const [number, setNumber] = useState(true);

  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "100px",
          border: "3px solid orange",
        }}
      >
        <button
          onClick={() => {
            setNumber(false);
          }}
        >
          사라져라
        </button>

        <h1>{number ? "안녕하세요" : ""}</h1>
      </div>
    </div>
  );
}
