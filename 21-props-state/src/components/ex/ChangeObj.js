import { useState } from "react";
export default function ChangeObj({ objArr }) {
  const [member, setMember] = useState(objArr[0]);
  return (
    <div>
      <h2>이름: {member.name}</h2>
      <h2>나이: {member.age}</h2>
      <h2>별명: {member.nickName}</h2>
      <button
        onClick={() => {
          if (member.name === "뽀로로") setMember(objArr[1]);
          if (member.name === "루피") setMember(objArr[2]);
          if (member.name === "크롱") setMember(objArr[0]);
        }}
      >
        멤버 바꾸기
      </button>
    </div>
  );
}
