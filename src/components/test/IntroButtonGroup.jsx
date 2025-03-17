import React from "react";
import { base_url } from "../../App";
import CopyToClipboard from "react-copy-to-clipboard";
import { LinkOutlined, HomeOutlined } from "@ant-design/icons";
import styles from "./introButtonGroup.module.css";
import { useNavigate } from "react-router-dom";

const IntroButtonGroup = ({ testParam }) => {
  const navigate = useNavigate();
  const onClickCopyUrlButton = () => {
    alert("복사되었습니다.");
  };
  const onClickGoHomeButton = () => {
    navigate("/");
  };

  return (
    <div>
      <div>
        <CopyToClipboard text={`/${base_url}/${testParam}`}>
          <button className={styles.upperButton} onClick={onClickCopyUrlButton}>
            <LinkOutlined />
            &nbsp; 링크 복사
          </button>
        </CopyToClipboard>
      </div>
      <div>
        <button className={styles.bottomButton} onClick={onClickGoHomeButton}>
          <HomeOutlined />
          &nbsp; 다른 테스트 하러가기
        </button>
      </div>
    </div>
  );
};

export default IntroButtonGroup;
