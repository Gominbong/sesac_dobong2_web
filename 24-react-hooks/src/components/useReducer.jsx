import { useReducer, useState } from "react";

const BANK_ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};
const reducer = (prevState, action) => {
  console.log("prevState : ", prevState);
  console.log("action : ", action);
  console.log("dispatch 함수가 호출되면, reducer 동작");
  switch (action.type) {
    case BANK_ACTION_TYPES.deposit:
      return prevState + action.payload;
    case BANK_ACTION_TYPES.withdraw:
      return prevState - action.payload;
    default:
      return prevState;
  }
};

export default function UseReducer() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h2>useReducer 사용하기</h2>
      <p>현제 잔고 : {money}원 </p>
      <input
        type="number"
        value={number}
        step={1000}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <br />
      <button
        onClick={() => {
          dispatch({ type: BANK_ACTION_TYPES.deposit, payload: number });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: BANK_ACTION_TYPES.withdraw, payload: number });
        }}
      >
        출금
      </button>
    </>
  );
}