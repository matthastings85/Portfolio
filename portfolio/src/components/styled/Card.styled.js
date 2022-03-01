import styled from "styled-components";

export const StyledCard = styled.div`
  width: 1000px;
  height: 400px;
  margin: 50px 0;
  transition: all ease-in-out 0.5s;
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

  > div {
    display: flex;
    flex-direction: column;
    align-items: ${({ align }) => align};
    justify-content: center;
    height: 100%;
    padding: 10px;
    position: absolute;
    top: 0;
    ${({ position }) => position}: 0;
    z-index: 1;

    h2 {
      font-family: ${({ theme }) => theme.font.accent};
      color: ${({ theme }) => theme.colors.accent};
      margin: 10px 0 0 0;
      background-color: ${({ theme }) => theme.colors.dark}fa;
      padding: 10px;
      border-radius: 5px;
    }

    p {
      position: relative;
      ${({ position }) => position}: 0;
      width: 450px;
      background-color: ${({ theme }) => theme.colors.dark}fa;
      padding: 10px;
      border-radius: 5px;
      box-shadow: ${({ theme }) => theme.shadow.two};
      margin-top: 0;
      text-align: ${({ position }) => position};
    }
    a {
      color: ${({ theme }) => theme.colors.light};
      margin: 10px;
      font-size: 1.5rem;
      z-index: 100;
    }
    a:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
    span {
      margin: 10px;
      font-size: 2rem;
    }
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
      button {
        display: none;
      }
    }
  }
  img {
    height: 100%;
    border-radius: 5px;
    box-shadow: ${({ theme }) => theme.shadow.two};
  }

  @media screen and (max-width: ${({ theme }) => theme.screen.xl}) {
    width: 900px;
  }
  @media screen and (max-width: ${({ theme }) => theme.screen.large}) {
    width: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    & > div {
      visibility: ${({ show }) => (show ? "visible" : "hidden")};
      position: absolute;
      left: auto;
      right: auto;
      align-items: center;
      z-index: 3;
      p {
        text-align: center;
      }
    }
    section {
      height: auto;
      position: relative;
      z-index: 1;

      div {
        left: auto;
        top: auto;
        background: ${({ theme }) => theme.colors.dark}a1;
        background: ${({ show, theme }) => show && theme.colors.dark};
        display: flex;
        align-items: center;
        justify-content: center;
        button {
          display: ${({ show }) => !show && "block"};
        }
      }
    }
    #close-cross {
      position: absolute;
      top: 0;
      right: 0;
      height: auto;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      z-index: 3;
      cursor: pointer;
      span {
        height: 3px;
        width: 30px;
        margin: 0.5rem;
        background-color: ${({ theme }) => theme.colors.secondary};
        border-radius: 2px;
        &:nth-of-type(1) {
          transform: translate(-10px) rotate(45deg) translate(13.5px);
        }
        &:nth-of-type(2) {
          transform: translate(-10px) rotate(-45deg) translate(13.5px);
        }
      }
    }
    &:hover {
      section {
        div {
          background: ${({ show, theme }) =>
            !show ? "none" : theme.colors.dark};
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.screen.small}) {
    width: 100%;
    height: auto;
    > div {
      h2,
      span {
        font-size: 1.2rem;
        margin: 0 10px;
      }
      p {
        font-size: 0.9rem;
        width: 100%;
      }
      a {
        font-size: 1.3rem;
        z-index: 100;
      }
    }
    img {
      height: auto;
      object-fit: cover;
    }
  }
`;
