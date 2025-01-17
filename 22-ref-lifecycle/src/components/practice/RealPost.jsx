import axios from "axios";
import { useEffect, useState } from "react";
import PostItem from "./PostItem";
export default function RealPost() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(res.data);
    setPosts(res.data.slice(0, 10));
  };

  useEffect(() => {
    // getPosts();
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      setPosts(res.data.slice(0, 5));
    });
  }, []);

  //   getPosts();
  return (
    // https://jsonplaceholder.typicode.com/posts

    <>
      <h6>여기는 RealPOst</h6>
      {posts.length === 0 ? (
        <span>...loading...</span>
      ) : (
        posts.map((post) => {
          return (
            <PostItem
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          );
        })
      )}
    </>
  );
}
