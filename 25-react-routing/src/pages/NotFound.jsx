import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="NotFound">
      <h2>404 ERROR!! 😀</h2>
      <Link to="/">home으로 이동하기기</Link>
    </div>
  );
}
