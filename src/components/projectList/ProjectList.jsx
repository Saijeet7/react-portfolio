import React from "react";
import { IconWrap, IconLink, ImageWrap, Wrapper } from "./Project.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { data } from "./Data";

const ProjectList = () => {
  const projectData = data.map((data) => (
    <Wrapper key={data.id}>
      <h2>
        {data.id}) {data.title}
      </h2>
      <p>{data.description}</p>
      <h3>Links</h3>
      <IconWrap>
        <IconLink href={data.github} target="_blank">
          <FontAwesomeIcon icon={faGithub} className="icon" />
          <span className="screen-reader-text">Github Link</span>
        </IconLink>
        <IconLink href={data.live} target="_blank">
          <FontAwesomeIcon icon={faLink} className="icon" />
          <span className="screen-reader-text">Live Site Link</span>
        </IconLink>
      </IconWrap>
      <ImageWrap>
        <img src={data.img} alt="Investment Cal Image" loading="lazy" />
      </ImageWrap>
    </Wrapper>
  ));

  return <>{projectData}</>;
};

export default ProjectList;
