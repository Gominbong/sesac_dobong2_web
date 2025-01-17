import { useState } from "react";

export default function HandlerEx2() {
  let [number, setNumber] = useState("검정색");

  return (
    <div>
      <h1>{number} 글씨</h1>
      <button
        onClick={() => {
          setNumber("빨간색");
          document.querySelector("h1").style.color = "red";
        }}
      >
        빨간색
      </button>
      <button
        onClick={() => {
          setNumber("파란색");
          document.querySelector("h1").style.color = "blue";
        }}
      >
        파란색
      </button>
    </div>
  );
}
