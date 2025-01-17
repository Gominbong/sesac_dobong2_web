import { useState, useEffect } from "react";

const MyComponent = ({ number }) => {
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("함수형 컴포넌트 mount!!!😊");
  }, []);

  useEffect(() => {
    return () => {
      console.log("함수형 컴포넌트 unmount!!!❤️");
    };
  }, [number]);

  //update 시점에 실행 + mount 시점에도 실행행
  useEffect(() => {
    console.log("함수형 컴포넌트 update!! 업데이트 될떄마다!😂");
  });

  useEffect(() => {
    console.log("함수형 컴포넌트 update!! text 변경");
  }, [text]);
  return (
    <>
      <p>MyComponent: {number}</p>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    </>
  );
};

const LifeCycleFunc = () => {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  const changeVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <button onClick={changeNumber}>plus</button>
      <button onClick={changeVisible}>on/off</button>
      {visible && <MyComponent number={number} />}
    </>
  );
};
export default LifeCycleFunc;
