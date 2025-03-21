import React from "react";
import IntroButtonGroup from "./IntroButtonGroup";

function Intro({ info, setMode }) {
  return (
    <div>
      <h1> {info?.mainTitle}</h1>
      <h3> {info?.subTitle}</h3>
      <img
        onClick={() => setMode("quiz")}
        style={{ width: "100%", cursor: "pointer" }}
        src={info?.mainImage}
        alt={info?.mainTitle}
      />
      <p>
        <span style={{ fontWeight: "bold", color: "brown" }}>
          {info?.mainTitle}
        </span>
        를 시작해보세요!
      </p>
      <IntroButtonGroup testParam={info?.mainUrl} />
    </div>
  );
}

export default Intro;
