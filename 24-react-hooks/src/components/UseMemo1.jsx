import { useMemo, useState } from "react";

export default function UseMemo1() {
  const [number, setNumber] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const calc = () => {
    console.log("calc...");
    return number * 2;
  };

  //[useMeno 사용!]
  // 특정 값이 변경되었을 때만 함수가 호출되도록록
  const calc2 = useMemo(() => {
    console.log("calc...2");
    return number * 2;
  }, [number]);
  return (
    <>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button onClick={() => setNumber(number + 1)}>+1</button>
      <p>number: {number}</p>
      <p>calc: {calc()}</p>
      <p>calc2: {calc2}</p>
    </>
  );
}
