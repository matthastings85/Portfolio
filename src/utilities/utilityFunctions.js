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
  faGitAlt,
  faNode,
  faWordpress,
  faDocker,
  faShopify,
  faNpm,
  faLinux,
  faJenkins,
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
  ) : tool === "Node" ? (
    <span key={index}>
      <FontAwesomeIcon icon={faNode} />
    </span>
  ) : tool === "Wordpress" ? (
    <span key={index}>
      <FontAwesomeIcon icon={faWordpress} />
    </span>
  ) : tool === "Docker" ? (
    <span key={index}>
      <FontAwesomeIcon icon={faDocker} />
    </span>
  ) : tool === "Shopify" ? (
    <span key={index}>
      <FontAwesomeIcon icon={faShopify} />
    </span>
  ) : tool === "NPM" ? (
    <span key={index}>
      <FontAwesomeIcon icon={faNpm} />
    </span>
  ) : tool === "Docker" ? (
    <span key={index}>
      <FontAwesomeIcon icon={faDocker} />
    </span>
  ) : tool === "Jenkins" ? (
    <span key={index}>
      <FontAwesomeIcon icon={faJenkins} />
    </span>
  ) : tool === "Linux" ? (
    <span key={index}>
      <FontAwesomeIcon icon={faLinux} />
    </span>
  ) : tool === "MUI" ? (
    <span key={index}>
      <img
        src="./images/mui_logo.png"
        alt="mui logo"
        style={{ height: "1.2em", boxShadow: "none" }}
      />
    </span>
  ) : tool === "Git" ? (
    <span key={index}>
      <FontAwesomeIcon icon={faGitAlt} />
    </span>
  ) : null;
};
