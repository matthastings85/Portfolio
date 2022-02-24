import styled from "styled-components";

export const StyledCard = styled.div`
  min-width: 350px;
  width: 1000px;
  height: 400px;
  margin: 50px 0;
  transition: all ease-in-out 0.5s;
  /* box-shadow: ${({ theme }) => theme.shadow.one}; */
  /* border-radius: 20px; */
  /* overflow: hidden; */
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex-direction: ${({ layout }) => layout || "row-reverse"};
  position: relative;

  &:hover {
    transform: scale(1.01);
    section {
      div {
        background: none;
      }
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: ${({ align }) => align};
    justify-content: center;
    height: 100%;
    padding: 10px;
    position: absolute;
    top: 0;
    ${({ position }) => position}: 0;
    /* background-color: ${({ theme }) => theme.colors.dark}fa; */
    z-index: 1;
  }

  h2 {
    font-family: ${({ theme }) => theme.font.accent};
    color: ${({ theme }) => theme.colors.accent};
    margin: 10px 0 0 0;
  }

  p {
    position: relative;
    ${({ position }) => position}: 0;
    width: 450px;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.dark}fa;
    border-radius: 5px;
    box-shadow: ${({ theme }) => theme.shadow.two};
    margin-top: 0;
    text-align: ${({ position }) => position};
  }
  a {
    color: ${({ theme }) => theme.colors.light};
    margin: 10px;
    font-size: 1.5rem;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
  span {
    margin: 10px;
    font-size: 2rem;
  }
  section {
    height: 400px;
    overflow: hidden;
    position: relative;

    div {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: ${({ theme }) => theme.colors.dark}a1;
    }
  }
  img {
    height: 100%;
    border-radius: 5px;
    box-shadow: ${({ theme }) => theme.shadow.two};
  }
`;
