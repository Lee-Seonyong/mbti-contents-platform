import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TestResultRenderer from "../components/TestResult/TestResultRenderer";
import { TESTS } from "../data/TESTS";
import ShareButtonGroup from "../components/TestResult/ShareButtonGroup";
import ResultButtonGroup from "../components/TestResult/ResultButtonGroup";
import ResultThumbnailList from "../components/TestResult/ResultThumbnailList";

function Testresult() {
  const navigate = useNavigate();
  const { testParam, resultParam } = useParams();
  const [renderTestInfo, setRenderTestInfo] = useState({});
  const [renderResultInfo, setRenderResultInfo] = useState({});
  useEffect(() => {
    const testInfo = TESTS.find((test) => test.info.mainUrl === testParam);
    if (!testInfo) {
      alert("잘못된 URL입니다.");
      navigate("/");
    }
    setRenderTestInfo(testInfo);
    const resultInfo = testInfo?.results?.find(
      (result) => result.query === resultParam
    );
    if (!resultInfo) {
      alert("잘못된 결과 URL입니다.");
      navigate(`/${testInfo?.info?.mainUrl}`);
    }
    setRenderResultInfo(resultInfo);
  }, [testParam, resultParam, navigate]);

  return (
    <div>
      <TestResultRenderer renderResultInfo={renderResultInfo} />
      <ShareButtonGroup
        testParam={testParam}
        resultParam={resultParam}
        renderTestInfo={renderTestInfo}
      />
      <ResultButtonGroup
        testParam={testParam}
        resultParam={resultParam}
        renderTestInfo={renderTestInfo}
      />
      <ResultThumbnailList testParam={testParam} />
    </div>
  );
}

export default Testresult;
