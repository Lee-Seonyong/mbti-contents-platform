import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { LinkOutlined, RedoOutlined, HomeOutlined } from "@ant-design/icons";
import { base_url } from "../../App";
import { useNavigate } from "react-router-dom";
import styles from "./resultButtonGroup.module.css";

const ResultButtonGroup = ({ testParam, resultParam }) => {
  const navigate = useNavigate();
  const onClickRedoButton = () => {
    navigate(`/${testParam}`);
  };
  const onClickGoHomeButton = () => {
    navigate("/");
  };
  return (
    <div className={styles.mainDiv}>
      <div className={styles.upperDiv}>
        <CopyToClipboard
          text={`/${base_url}/${testParam}/result/${resultParam}`}
        >
          <button
            className={styles.upperButton}
            onClick={() => alert("복사 되었습니다.")}
          >
            <LinkOutlined />
            &nbsp; 링크 복사
          </button>
        </CopyToClipboard>
        <button className={styles.upperButton} onClick={onClickRedoButton}>
          <RedoOutlined />
          &nbsp; 다시 하기
        </button>
      </div>
      <div className={styles.bottomDiv}>
        <button className={styles.bottomButton} onClick={onClickGoHomeButton}>
          <HomeOutlined />
          &nbsp; 다른 테스트 하러가기
        </button>
      </div>
    </div>
  );
};

export default ResultButtonGroup;
