import { useState } from "react";
export default function Alphabet() {
  const [list, setList] = useState([
    { id: 1, alpha: "a" },
    { id: 2, alpha: "b" },
    { id: 3, alpha: "c" },
    { id: 4, alpha: "d" },
    { id: 5, alpha: "e" },
  ]);

  const [input, setInput] = useState("");
  console.log([1, 2, 3, 4].concat(10));
  const activeEnter = (e) => {
    if (e.key == "Enter") {
      //   console.log(e.key);
      addAlpha();
    }
  };
  const addAlpha = () => {
    const newList = list.concat({
      id: list.length == 0 ? 1 : list[list.length - 1].id + 1,
      alpha: input,
    });
    setList(newList);
  };

  const deleteAlpha = (id) => {
    const newAlpha = list.filter((alpha) => {
      return alpha.id !== id;
    });
    setList(newAlpha);
  };

  return (
    <div>
      <h2>alphabet</h2>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={activeEnter}
      />
      <button onClick={addAlpha}>추가</button>
      <ol>
        {list.map((el) => {
          return (
            <li onClick={() => deleteAlpha(el.id)} key={el.id}>
              {el.alpha}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
