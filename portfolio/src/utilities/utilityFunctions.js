// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faReact,
  faSass,
  faJs,
  faBootstrap,
  faCodepen,
  faHtml5,
  faCss3,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

export const getToolIcon = (tool, index) => {
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
  ) : tool === "GitHub" ? (
    <span key={index}>
      <FontAwesomeIcon icon={faGithub} />
    </span>
  ) : tool === "Codepen" ? (
    <span key={index}>
      <FontAwesomeIcon icon={faCodepen} />
    </span>
  ) : tool === "HTML" ? (
    <span key={index}>
      <FontAwesomeIcon icon={faHtml5} />
    </span>
  ) : tool === "CSS" ? (
    <span key={index}>
      <FontAwesomeIcon icon={faCss3} />
    </span>
  ) : tool === "Git" ? (
    <span key={index}>
      <FontAwesomeIcon icon={faGit} />
    </span>
  ) : null;
};
