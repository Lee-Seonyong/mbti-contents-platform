import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Test from "./page/Test";
import Testresult from "./page/TestResult";
import Privacy from "./page/Privacy";

export const base_url = "http://localhost:5173";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:testParam" element={<Test />} />
          <Route
            path="/:testParam/result/:resultParam"
            element={<Testresult />}
          />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
