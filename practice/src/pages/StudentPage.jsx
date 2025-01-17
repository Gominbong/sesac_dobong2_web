import { useNavigate } from "react-router";

export default function StudentPage({ name }) {
  const navigate = useNavigate();

  return (
    <header className="Header">
      <span>
        <h1>ReactRouter실습</h1>
      </span>
      <div>
        <p>학생의 {name}이름은 입니다</p>
        <button onClick={() => navigate(-1)}>이전페이지로</button>
      </div>
    </header>
  );
}
