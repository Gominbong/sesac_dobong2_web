import { Link } from "react-router";

export default function Header() {
  return (
    <header className="Header">
      <span>
        <h1>ReactRouter실습</h1>
      </span>
      <div>
        <Link to={"/student/sean"} className="menu-item">
          학생
        </Link>
        <Link to={"/student/codingon"} className="menu-item">
          코딩온
        </Link>
        <Link to={"/student/new?name=jisu"} className="menu-item">
          searchParams
        </Link>
      </div>
    </header>
  );

  return (
    <header className="Header">
      <span>logo</span>
      <div>
        <Link to={"/"} className="menu-item">
          홈으로
        </Link>
        <Link to={"/test"} className="menu-item">
          테스트
        </Link>
        <Link to={"/products"} className="menu-item">
          Product
        </Link>
      </div>
    </header>
  );
}
