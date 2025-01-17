import { useState, useRef } from "react";

export default function PracticeMap2() {
  const [comment, setComment] = useState([
    { writer: "민봉", title: "화이팅!!!" },
    { writer: "진우", title: "집에가고싶다" },
    { writer: "규빈", title: "나는야 코딩 천재" },
  ]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputWriter, setInputWriter] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [result, setResult] = useState([]);
  const [searchType, setSearchType] = useState("writer");
  const inputRef = useRef();
  const addComment = (e) => {
    if (inputWriter.trim() === "" || inputTitle.trim() === "") {
      inputRef.current.focus();
      return;
    }

    setComment([...comment, { writer: inputWriter, title: inputTitle }]);
  };

  const searchComment = () => {
    let searchResult = comment.filter((item) => {
      //   console.log(item);
      //   console.log(item[searchType]);
      //   console.log("검색어 검사", item[searchType].includes(inputSearch));
      if (!item[searchType].includes(inputSearch)) {
        return null;
      }
      return item;
    });
    console.log(searchResult);
    setResult(searchResult);
    setInputSearch("");
  };

  const selectSearchType = (e) => {
    setSearchType(e.target.value);
  };
  return (
    <div>
      <form>
        <label htmlFor="writer">작성자</label>
        <input
          onChange={(e) => {
            setInputWriter(e.target.value);
          }}
          type="text"
          name="writer"
          id="writer"
          value={inputWriter}
        />{" "}
        <label htmlFor="title">제목</label>
        <input
          ref={inputRef}
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
          type="text"
          name="title"
          id="title"
          value={inputTitle}
        />
        <button
          type="button"
          onClick={(e) => {
            addComment(e);
          }}
        >
          작성
        </button>
      </form>
      <form>
        {/* 검색폼 */}
        <select onChange={selectSearchType} name="type" id="">
          <option value={"writer"}>작성자</option>
          <option value={"title"}>제목</option>
        </select>
        <input
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
          type="text"
          value={inputSearch}
          name="search"
          placeholder="검색어를 입력해주세요"
        />
        <button onClick={searchComment} type="button">
          검색
        </button>
      </form>

      <table border={1} style={{ margin: "30px auto", width: "500px" }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((value, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h4>검색결과</h4>
      {result.length == 0 ? (
        <h3>검색결과가 없어요!</h3>
      ) : (
        <table border={1} style={{ margin: "0 auto", width: "500px" }}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {result.map((el, i) => {
              return (
                <tr key={i + 1}>
                  <td>{i + 1}</td>
                  <td>{el.title}</td>
                  <td>{el.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
