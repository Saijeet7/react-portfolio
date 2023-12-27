import React from "react";
import { Title, Wrapper, Media } from "./SkillGrid.style";
import logo1 from "../../assets/images/logo1.png";
import logo2 from "../../assets/images/logo2.png";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo4.png";
import logo5 from "../../assets/images/logo5.png";
import logo6 from "../../assets/images/logo6.png";
import logo7 from "../../assets/images/logo7.png";
import logo8 from "../../assets/images/logo8.png";

const SkillGrid = () => {
  return (
    <>
      <div>
        <Title>Skills</Title>
        <Wrapper>
          <Media>
            <img src={logo1} alt="Logo of HTML" />
          </Media>
          <Media>
            <img src={logo2} alt="Logo of CSS" />
          </Media>
          <Media>
            <img src={logo3} alt="Logo of JS" />
          </Media>
          <Media>
            <img src={logo4} alt="Logo of Reacy JS" />
          </Media>
          <Media>
            <img src={logo5} alt="Logo of Next JS" />
          </Media>
          <Media>
            <img src={logo6} alt="Logo of Figma JS" />
          </Media>
          <Media>
            <img src={logo7} alt="Logo of Python" />
          </Media>
          <Media>
            <img src={logo8} alt="Logo of Git" />
          </Media>
        </Wrapper>
      </div>
    </>
  );
};

export default SkillGrid;
