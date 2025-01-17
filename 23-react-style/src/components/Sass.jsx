import "../style/Sass.scss";
import img1 from "../assets/main.png";
import practice1 from "../assets/practice1.png";
import practice2 from "../assets/practice2.png";
import practice3 from "../assets/practice3.png";
import practice4 from "../assets/practice4.png";
export default function Sass() {
  return (
    <>
      <h4>SASS 사용(.scss)</h4>
      <div className="div1">
        <div className="div2">
          <div className="div3"></div>
        </div>
        <button className="btn orangered">BUTTON1</button>
        <button className="btn btn--opacity">BUTTON2</button>
        <button className="btn btn--blue">BUTTON3</button>
      </div>

      <div className="container">
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>

        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>

        <div className="box2">1</div>
        <div className="box2">2</div>
        <div className="box2">3</div>
        <div className="box2">4</div>
      </div>

      <h2>이미지 가져오기</h2>
      <h4>1. src 폴더 내부의 이미지 가져오기</h4>
      <h5>경로명으로 가져오기(상대경로)</h5>
      <img src="../assets/main.png" alt="src 내부의 사진은 바로 접근 불가" />
      <h5>import 후 가져오기</h5>
      <img src={img1} alt="main" />
      <h5>css에서 background-image 속성으로 접근</h5>
      <div className="src-img img-test"></div>
      <h4>1. public 폴더 내부의 이미지 가져오기</h4>
      <img
        src={process.env.PUBLIC_URL + "/images/main.png"}
        alt="안전하게 접근하는 방법"
      />

      <h5>css에서 backgroud-image 속성으로 접근</h5>
      <div className="public-img img-test">
        <div className="public-img img-test"></div>
        <div className="public-img img-test"></div>
        <div className="public-img img-test"></div>
        <div className="public-img img-test"></div>
      </div>
    </>
  );
}
