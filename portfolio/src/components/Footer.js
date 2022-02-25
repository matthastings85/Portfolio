import React from "react";
import StyledFooter from "./styled/Footer.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Flex } from "./styled/Flex.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Flex>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </Flex>
      <div>Designed and built by Matt Hastings</div>
    </StyledFooter>
  );
};

export default Footer;
