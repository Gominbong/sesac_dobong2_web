export default function BasicCSS() {
  const childDiv = {
    backgroundColor: "gray",
  };
  return (
    <>
      <h3>스타일 적용 방법</h3>
      <ol>
        <li>인라인 스타일</li>
        <li>CSS 파일 만들어서 import</li>
        <li>.module.css 파일 만들어서 import</li>
        <li>styled-components 라이브러르 사용 (설치필요)</li>
        <li>SASS 사용(설치 필요)</li>
      </ol>

      <h4 style={{ color: "#888" }}>인라인 스타일로 적용</h4>
      <div>
        <div>안녕하세요</div>
      </div>
      <h4> CSS파일로 적용</h4>
      <div className="box1">
        <div>안녕하세요</div>
      </div>
    </>
  );
}
