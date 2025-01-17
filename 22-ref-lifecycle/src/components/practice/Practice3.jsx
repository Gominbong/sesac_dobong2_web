import { useRef } from "react";
export default function Practice3() {
  const number = Math.floor(Math.random() * 11);
  const number2 = Math.floor(Math.random() * 11);
  const inputRef = useRef();
  const operators = ["+", "-", "*"];
  const randomOperator =
    operators[Math.floor(Math.random() * operators.length)];

  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "150px",
          border: "1px solid black",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3>{number}</h3>
          <h3>{randomOperator}</h3>
          <h3>{number2}</h3>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input type="text" ref={inputRef} />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={() => {
              console.log(typeof inputRef.current.value);
              let result;
              if (randomOperator === "+") {
                result = number + number2;
              } else if (randomOperator === "-") {
                result = number - number2;
              } else if (randomOperator === "*") {
                result = number * number2;
              }
              if (result === Number(inputRef.current.value)) {
                alert("정답입니다.");
              } else {
                alert("틀렸습니다.");
              }
              inputRef.current.value = "";
              inputRef.current.focus();
            }}
          >
            정답제출
          </button>
        </div>
      </div>
    </div>
  );
}
