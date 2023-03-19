import styled from "styled-components";

const StyledFadeInSection = styled.div`
  opacity: 0;
  transform: translateY(10vh);
  visibility: hidden;
  transition: opacity 1s ease-out, transform 0.6s ease-out;
  will-change: opacity, visibility;

  opacity: ${(props) => props.visibility === "is-visible" && "1"};
  transform: ${(props) => props.visibility === "is-visible" && "none"};
  visibility: ${(props) => props.visibility === "is-visible" && "visible"};
`;

export default StyledFadeInSection;
