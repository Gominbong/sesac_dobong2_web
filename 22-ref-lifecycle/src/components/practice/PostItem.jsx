export default function PostItem({ id, title, body }) {
  return (
    <div style={{ border: "2px solid black", margin: "10px", padding: "10px" }}>
      <div>
        <span style={{ border: "1px solid pink" }}>NO. {id}</span>
        <span>{title}</span>
        <p>{body}</p>
      </div>
    </div>
  );
}
