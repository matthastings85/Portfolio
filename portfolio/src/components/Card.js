import React from "react";
import { StyledCard } from "./styled/Card.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Icons
import {
  faGithub,
  faReact,
  faSass,
  faJs,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { Flex } from "./styled/Flex.styled";
import FadeInSection from "./FadeInSection";

const Card = ({ item: { id, title, body, image, repo, deploy, tools } }) => {
  const getTool = (tool, index) => {
    return tool === "React" ? (
      <span key={index}>
        <FontAwesomeIcon icon={faReact} />
      </span>
    ) : tool === "SASS" ? (
      <span key={index}>
        <FontAwesomeIcon icon={faSass} />
      </span>
    ) : tool === "JavaScript" ? (
      <span key={index}>
        <FontAwesomeIcon icon={faJs} />
      </span>
    ) : tool === "Bootstrap" ? (
      <span key={index}>
        <FontAwesomeIcon icon={faBootstrap} />
      </span>
    ) : null;
  };
  return (
    <StyledCard
      layout={id % 2 === 0 && "row"}
      position={id % 2 === 0 ? "right" : "left"}
      align={id % 2 === 0 ? "flex-end" : "flex-start"}
    >
      <div id={"card" + id}>
        <h2>{title}</h2>
        <Flex>
          <span>
            <a href={deploy}>
              <FontAwesomeIcon icon={faExternalLink} />
            </a>
          </span>
          <span>
            <a href={repo}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </span>
        </Flex>
        <p>{body}</p>
        <Flex>{tools.map((tool, index) => getTool(tool, index))}</Flex>
      </div>
      <section>
        <div></div>
        <img src={`./images/${image}`} alt="" />
      </section>
    </StyledCard>
  );
};

export default Card;