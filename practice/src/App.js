import { Route, Routes } from "react-router";
import "./style/common.scss";
import StudentPage from "./pages/StudentPage";
import Home from "./pages/Home";
import CodingonPage from "./pages/CodingonPage";
import NewPage from "./pages/NewPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/name" element={<StudentPage name="sean" />} />
        <Route
          path="/student/codingon"
          element={<CodingonPage name="codingon" />}
        />
        <Route path="/student/new" element={<NewPage />} />
      </Routes>
    </>
  );
}

export default App;
