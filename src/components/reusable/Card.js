import React, { useState } from "react";
import { StyledCard } from "../styled/Card.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex } from "../styled/Flex.styled";
import Button from "./Button";

// Hooks
import { getToolIcon } from "../../utilities/utilityFunctions";

// Icons
import { faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

const Card = ({
  item: { id, title, body, image, repo, repoType, deploy, tools },
}) => {
  const [showDetails, setShowDetails] = useState(false);

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
            <a href={deploy} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faExternalLink} />
            </a>
          </span>
          <span>
            <a href={repo} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={repoType === "github" ? faGithub : faCodepen}
              />
            </a>
          </span>
        </Flex>
        <p>{body}</p>
        <Flex>{tools.map((tool, index) => getToolIcon(tool, index))}</Flex>
      </div>
      <section>
        <div>
          <Button text="Project Info" callback={showInfo} />
        </div>
        <a href={deploy} target="_blank" rel="noreferrer">
          <img src={`./images/${image}`} alt={title} />
        </a>
      </section>
      <div id="close-cross">
        <span onClick={showInfo}></span>
        <span onClick={showInfo}></span>
      </div>
    </StyledCard>
  );
};

export default Card;
