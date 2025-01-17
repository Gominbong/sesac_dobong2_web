import { useNavigate, useParams } from "react-router";

export default function StudentPage() {
  const { name } = useParams();
  console.log(name);
  const navigate = useNavigate();

  return (
    <header className="Header">
      <span>
        <h1>ReactRouter실습</h1>
      </span>
      <div>
        <p>학생의 이름은 {name} 입니다</p>
        <button onClick={() => navigate(-1)}>뒤로가기</button>
      </div>
    </header>
  );
}
