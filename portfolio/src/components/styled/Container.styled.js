import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) =>
    props.w800 ? "800px" : props.w1000 ? "1000px" : "1200px"};
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.screen.small}) {
    padding: 0 10px;
  }
`;
