import React from "react";
import { Wrapper } from "../keyInfo/KeyInfo.styles";
import { IconWrap, IconLink, ImageWrap } from "./Project.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import InvestmentCal from "../../assets/images/investment.png";
import Todo from "../../assets/images/todolist.png";
import Weather from "../../assets/images/weatherapp.png";
import Plantmandu from "../../assets/images/plantmandu.png";
import TechNepal from "../../assets/images/technepal.png";
import Blackjack from "../../assets/images/blackjack.png";
import SneakerNepal from "../../assets/images/sneakernepal.png";
import Fifa from "../../assets/images/fifa.png";

const ProjectList = () => {
  return (
    <>
      <Wrapper>
        <h2>1) Investment Calculator (2023)</h2>
        <p>React Js, React Hooks, Styled components</p>
        <h3>Links</h3>
        <IconWrap>
          <IconLink
            href="https://github.com/Saijeet7/investment-calculator-self/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </IconLink>
          <IconLink
            href="https://saijeet7.github.io/investment-calculator-self/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLink} className="icon" />
          </IconLink>
        </IconWrap>
        <ImageWrap>
          <img src={InvestmentCal} alt="Investment Cal Image" />
        </ImageWrap>
      </Wrapper>
      {/* @end of 1st Project */}
      <Wrapper>
        <h2>2) To Do List React (2021)</h2>
        <p>React Js, React Hooks, Styled components</p>
        <h3>Links</h3>
        <IconWrap>
          <IconLink
            href="https://github.com/Saijeet7/To-do-List-React"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </IconLink>
          <IconLink
            href="https://saijeet7.github.io/To-do-List-React/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLink} className="icon" />
          </IconLink>
        </IconWrap>
        <ImageWrap>
          <img src={Todo} alt="Todo list desktop view image" />
        </ImageWrap>
      </Wrapper>
      {/* @end of 2nd Project */}
      <Wrapper>
        <h2>3) Weather App React (2021)</h2>
        <p>React Js, React Hooks, Styled components</p>
        <h3>Links</h3>
        <IconWrap>
          <IconLink
            href="https://github.com/Saijeet7/weather-app"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </IconLink>
          <IconLink
            href="https://saijeet7.github.io/weather-app/ "
            target="_blank"
          >
            <FontAwesomeIcon icon={faLink} className="icon" />
          </IconLink>
        </IconWrap>
        <ImageWrap>
          <img src={Weather} alt="Todo list desktop view image" />
        </ImageWrap>
      </Wrapper>
      {/* @end of 3rd Project */}

      <Wrapper>
        <h2>4) Plantmandu Template (2023)</h2>
        <p>HTML, CSS, JS</p>
        <h3>Links</h3>
        <IconWrap>
          <IconLink
            href="https://github.com/Saijeet7/Plantmandu"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </IconLink>
          <IconLink
            href="https://659446707757fe0ee4c1c6a8--tech-nepal.netlify.app/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLink} className="icon" />
          </IconLink>
        </IconWrap>
        <ImageWrap>
          <img src={Plantmandu} alt="Todo list desktop view image" />
        </ImageWrap>
      </Wrapper>
      {/* @end of 4rd Project */}
      <Wrapper>
        <h2>5) TechNepal Template (2022)</h2>
        <p>HTML, CSS, JS</p>
        <h3>Links</h3>
        <IconWrap>
          <IconLink
            href="https://github.com/Saijeet7/Tech-Nepal"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </IconLink>
          <IconLink
            href="https://659445737757fe0e3ec1c27b--tech-nepal.netlify.app/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLink} className="icon" />
          </IconLink>
        </IconWrap>
        <ImageWrap>
          <img src={TechNepal} alt="Todo list desktop view image" />
        </ImageWrap>
      </Wrapper>
      {/* @end of 5rd Project */}
      <Wrapper>
        <h2>6) Black Jack Using JS</h2>
        <p>HTML, CSS, JS</p>
        <h3>Links</h3>
        <IconWrap>
          <IconLink
            href="https://github.com/Saijeet7/Black-Jack"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </IconLink>
          <IconLink
            href="https://saijeet-black-jack.netlify.app/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLink} className="icon" />
          </IconLink>
        </IconWrap>
        <ImageWrap>
          <img src={Blackjack} alt="Todo list desktop view image" />
        </ImageWrap>
      </Wrapper>
      {/* @end of 6th Project */}
      <Wrapper>
        <h2>7) Sneaker Nepal React Template(2021)</h2>
        <p>React Js, React Hooks, Styled components</p>
        <h3>Links</h3>
        <IconWrap>
          <IconLink
            href="https://github.com/Saijeet7/SneakerNepal"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </IconLink>
        </IconWrap>
        <ImageWrap>
          <img src={SneakerNepal} alt="Todo list desktop view image" />
        </ImageWrap>
      </Wrapper>
      {/* @end of 6th Project */}
      <Wrapper>
        <h2>8) EDA FIFA19 Playerdata Set (2021)</h2>
        <p>Fifa 19 Data set Data Analysis</p>
        <h3>Links</h3>
        <IconWrap>
          <IconLink
            href="https://github.com/Saijeet7/EDA-FIFA19-Playerdata-Set"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </IconLink>
          <IconLink
            href="https://github.com/Saijeet7/EDA-FIFA19-Playerdata-Set/blob/main/EDA_SaijeetUpadhyay.pdf"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLink} className="icon" />
          </IconLink>
        </IconWrap>
        <ImageWrap>
          <img src={Fifa} alt="Todo list desktop view image" />
        </ImageWrap>
      </Wrapper>
      {/* @end of 6th Project */}
    </>
  );
};

export default ProjectList;
