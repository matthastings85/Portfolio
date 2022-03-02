import React, { useState } from "react";
import { StyledCard } from "../styled/Card.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Icons
import {
  faGithub,
  faReact,
  faSass,
  faJs,
  faBootstrap,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { Flex } from "../styled/Flex.styled";
import Button from "./Button";

const Card = ({
  item: { id, title, body, image, repo, repoType, deploy, tools },
}) => {
  const [showDetails, setShowDetails] = useState(false);

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

  const showInfo = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <StyledCard
      layout={id % 2 === 0 && "row"}
      position={id % 2 === 0 ? "right" : "left"}
      align={id % 2 === 0 ? "flex-end" : "flex-start"}
      show={showDetails}
    >
      <div id={"card" + id}>
        <h2>{title}</h2>
        <Flex>
          <span>
            <a href={deploy} target="_blank">
              <FontAwesomeIcon icon={faExternalLink} />
            </a>
          </span>
          <span>
            <a href={repo} target="_blank">
              <FontAwesomeIcon
                icon={repoType === "github" ? faGithub : faCodepen}
              />
            </a>
          </span>
        </Flex>
        <p>{body}</p>
        <Flex>{tools.map((tool, index) => getTool(tool, index))}</Flex>
      </div>
      <section>
        <div>
          <Button text="Project Info" callback={showInfo} />
        </div>
        <img src={`./images/${image}`} alt="" />
      </section>
      <div id="close-cross">
        <span onClick={showInfo}></span>
        <span onClick={showInfo}></span>
      </div>
    </StyledCard>
  );
};

export default Card;
