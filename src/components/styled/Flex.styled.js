import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.layout || "row"};
  align-items: ${(props) =>
    props.alStart
      ? "flex-start"
      : props.alEnd
      ? "flex-end"
      : props.alStretch
      ? "stretch"
      : "center"};
  justify-content: ${(props) =>
    props.jcStart
      ? "flex-start"
      : props.jcEnd
      ? "flex-end"
      : props.jcStretch
      ? "stretch"
      : props.jcSpaceBetween
      ? "space-between"
      : props.jcSpaceAround
      ? "space-around"
      : "center"};
  /* margin: 10px; */
  width: ${(props) => props.width || "auto"};
`;
