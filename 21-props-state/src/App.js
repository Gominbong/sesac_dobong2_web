import { ClassProps, ClassProps2 } from "./components/ClassProps";
import {
  FunctionProps,
  FunctionProps2,
  FunctionProps3,
  FunctionProps4,
} from "./components/FunctionProps";
import ClassState from "./components/ClassState";
import FunctionState from "./components/FunctionState";
import Class from "./components/practice/Class";
import Class2 from "./components/practice/Class2";
import SyntheticEvent from "./components/SyntheticEvent";
import Counter from "./components/Counter";
import HandlerEx from "./components/ex/HandlerEx";
import HandlerEx2 from "./components/ex/HandlerEx2";
import HandlerEx3 from "./components/ex/HandlerEx3";
import HandlerEx4 from "./components/ex/HandlerEx4";
import PororoObj from "./components/ex/PororoObj";
import EntirePractice from "./components/practice/EntirePractice";
import PropsMap from "./components/PropsMap";
import PropsMap2 from "./components/PropsMap2";
import Alphabet from "./components/Alphabet";
import PracticeMap from "./components/practice2/PracticeMap";
import MapPractice2 from "./components/practice2/MapPractice2";

function App() {
  const arr = [
    { name: "peach", krPrice: 10000, number: 5 },
    { name: "strawberry", krPrice: 15000, number: 1 },
    { name: "pear", krPrice: 5000, number: 3 },
    { name: "apple", krPrice: 20000, number: 15 },
  ];
  return (
    <div>
      {/* <h3>클래스형 컴포넌트 props 사용해보기</h3>
      <ClassProps name="루피" color="pink" nickname="공주" />
      <ClassProps2
        name="루피"
        color="pink"
        nickname="공주"
        //fontColor="blue"
      />

      <h3>함수형 컴포넌트 props 사용해보기</h3>
      <FunctionProps name="사과" number={5} krPrice={10000} />
      <FunctionProps2 name="사과" number={5} krPrice={10000} />
      <FunctionProps3 name="샤인머스캣" number={1} krPrice={15000} />
      <FunctionProps4 name="딸기" number={1} krPrice={20000}>
        <span style={{ color: "red" }}>children요소입니다!!!!</span>
      </FunctionProps4>
      <FunctionProps4 name="딸기">
        <span style={{ color: "red" }}>children요소입니다!!!!</span>
      </FunctionProps4> */}
      {/* 
      <h2>Props 사용</h2>
      <h2>클래스형 State</h2>
      <ClassState />

      <h3>함수형 state </h3>
      <FunctionState />

      <h3>클래스형 </h3>
      <Class />

      <h3>함수형 </h3>
      <Class2 /> */}

      {/* <h2>event</h2>
      <SyntheticEvent />
      <Counter /> */}

      {/* <HandlerEx /> */}
      {/* <HandlerEx2 /> */}
      {/* <HandlerEx3 /> */}
      {/* <HandlerEx4 /> */}
      {/* <PororoObj /> */}

      {/* <h2>실습문제!!</h2> */}
      {/* <EntirePractice /> */}
      {/* <PropsMap arr={arr} />
      <PropsMap2 arr={arr} /> */}

      {/* <Alphabet /> */}
      {/* <PracticeMap /> */}
      <MapPractice2 />
    </div>
  );
}

export default App;
