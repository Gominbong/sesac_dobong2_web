import { useNavigate, useParams } from "react-router";
export default function CodingonPage() {
  const navigate = useNavigate();
  const { name } = useParams();
  return (
    <header className="Header">
      <span>
        <h1>ReactRouter실습</h1>
      </span>
      <div>
        <p>학생의 이름은 {name}입니다</p>
        <button onClick={() => navigate(-1)}>이전페이지로</button>
      </div>
    </header>
  );
}
