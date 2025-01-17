import "../style/test.css";
import { useEffect, useState } from "react";
import { fakePosts } from "./fakePosts";
export default function Test() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState("Loading...");
  useEffect(() => {
    setTimeout(() => {
      setPosts(fakePosts);
      setLoading("POst List...");
    }, 2000);
  }, []);

  return (
    <div className="container">
      <div className="red">
        <p>{loading}</p>
      </div>
      <div className="yallow">
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
