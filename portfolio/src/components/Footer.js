import React, { useState, useEffect } from "react";
import StyledFooter from "./styled/Footer.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { Flex } from "./styled/Flex.styled";
import { footerDelay } from "../utilities/loader";

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), footerDelay);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {isMounted && (
        <StyledFooter>
          <Flex>
            <a href="https://twitter.com/matthastings" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://github.com/matthastings85" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://codepen.io/matthastings85" target="_blank">
              <FontAwesomeIcon icon={faCodepen} />
            </a>
            <a
              href="https://www.linkedin.com/in/matt-hastings-646b16221/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </Flex>
          <div>Designed and built by Matt Hastings</div>
        </StyledFooter>
      )}
    </>
  );
};

export default Footer;
