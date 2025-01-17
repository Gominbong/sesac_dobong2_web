import { useRef, useState } from "react";
export default function Practice2() {
  const inputRef = useRef();
  const [color, setColor] = useState("");
  return (
    <div>
      <div
        style={{
          backgroundColor: color,
          border: "1px solid black",
          width: "200px",
          height: "50px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <input type="text" ref={inputRef} />
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => {
              setColor(inputRef.current.value);
              inputRef.current.value = "";
              inputRef.current.focus();
            }}
          >
            색 적용
          </button>
        </div>
      </div>
    </div>
  );
}
