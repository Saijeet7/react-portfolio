import React from "react";
import { Wrapper } from "./KeyInfo.styles";

const KeyInfo = () => {
  return (
    <>
      <Wrapper>
        <h2>EDUCATION</h2>
        <h3>
          University of Wolverhampton
          <br />
          Bachelor's degree, Information Technology
        </h3>
        <p>
          2020 - 2022
          <br /> Grade : Graduated
        </p>
      </Wrapper>
      <Wrapper>
        <h2>EXPERIENCE</h2>
        <h3>Last Door Solutions</h3>
        <p>
          <strong>Web Developer</strong>
          <br />
          Internship
          <br /> Jun 2022 - Dec 2022
        </p>
        <h3>Last Door Solutions</h3>
        <p>
          <strong>Web Developer(Junior)</strong>
          <br />
          Full TIme
          <br /> Dec 2022 - Present
        </p>
      </Wrapper>
    </>
  );
};

export default KeyInfo;
