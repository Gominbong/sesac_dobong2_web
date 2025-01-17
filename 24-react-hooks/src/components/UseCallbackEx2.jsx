import { useState, useCallback } from "react";
export default function UseCallbackEx2() {
  const [text, setText] = useState("");
  //   const onChangeText = (e) => {
  //     setText(e.target.value);
  //   };
  // 첫번째 랜더링이 되었을 때만 메모리에 저장됨
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  return (
    <div>
      <input type="text" onChange={onChangeText} />
      <p>작성한값 : {text}</p>
    </div>
  );
}
