import UseMemo1 from "./components/UseMemo1";
import UseMemoObj from "./components/UseMemoObj";
import Practice from "./components/Practice";
import UsecallbackEx1 from "./components/UsecallbackEx1";
import UseCallbackEx2 from "./components/UseCallbackEx2";
import UseReducer from "./components/useReducer";
import useTitle from "./hooks/useTitle";
import CustomHook from "./components/CustomHook";
import Form from "./components/Form";
import FormPractice from "./components/FormPractice";
function App() {
  useTitle("안녕하");
  return (
    <>
      {/* <UseMemo1 />
      <UseMemoObj /> */}
      {/* <Practice /> */}
      {/* <UsecallbackEx1 /> */}
      {/* <UseCallbackEx2 />*/}
      {/* <UseReducer /> */}
      {/* <CustomHook /> */}
      {/* <Form /> */}
      <FormPractice />
    </>
  );
}

export default App;
