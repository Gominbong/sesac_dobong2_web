import { useNavigate, useSearchParams } from "react-router";

export default function NewPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");

  return (
    <header className="Header">
      <span>
        <h1>ReactRouter실습</h1>
      </span>
      <div>
        <p>학생이름인 new 입니다다</p>
        <p>실제 {name}이름은 입니다</p>

        <button onClick={() => navigate(-1)}>이전페이지로</button>
      </div>
    </header>
  );
}
