import { useNavigate, useParams } from "react-router";
export default function CodingonPage() {
  const { codingon } = useParams();
  console.log(codingon);
  const navigate = useNavigate();

  return (
    <header className="Header">
      <span>
        <h1>ReactRouter실습</h1>
      </span>
      <div>
        <p>학생의 이름은 {codingon} 입니다</p>
        <button onClick={() => navigate(-1)}>뒤로가기</button>
      </div>
    </header>
  );
}
