import { useState } from "react";

export default function PracticeMap() {
  const [user, setUser] = useState([{ id: "", name: "", email: "" }]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="이름"
      ></input>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const newUser = {
              id: user.length === 0 ? 1 : user[user.length - 1].id + 1,
              name: name,
              email: email,
            };
            setUser([...user, newUser]);
          }
        }}
        type="text"
        placeholder="이메일"
      ></input>
      <button
        onClick={() => {
          const newUser = {
            id: user.length === 0 ? 1 : user[user.length - 1].id + 1,
            name: name,
            email: email,
          };
          setUser([...user, newUser]);
        }}
      >
        등록
      </button>
      <div>
        {user.map((e) => {
          return (
            <div key={e.id}>
              <span>{e.name} </span>
              <span>{e.email}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
