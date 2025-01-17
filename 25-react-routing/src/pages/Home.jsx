import { Link } from "react-router";

export default function Home() {
  const name = "jisu";
  return (
    <header className="Header">
      <span>
        <h1>ReactRouter실습</h1>
      </span>
      <div>
        <Link to={"/student/name"} element className="menu-item">
          학생
        </Link>
        <Link to={"/student/codingon"} element className="menu-item">
          코딩온
        </Link>
        <Link to={"/student/new?name=" + name} className="menu-item">
          searchParamsc
        </Link>
      </div>
    </header>
  );
}
