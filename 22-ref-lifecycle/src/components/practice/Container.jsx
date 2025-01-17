export default function Container({ children }) {
  return (
    <>
      <header>
        <main>{children}</main>
      </header>
      <footer>
        <h2>여기는 Footer</h2>
      </footer>
    </>
  );
}
