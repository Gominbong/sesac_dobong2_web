import { useState } from "react";

export default function HandlerEx4() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <div style={{ color: "red", fontSize: "30px" }}>
        {number}
        {number > 7 ? "화남" : "웃음"}
      </div>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        1 증가
      </button>
      <button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        1 감소
      </button>
    </div>
  );
}
