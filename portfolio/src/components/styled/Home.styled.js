import styled from "styled-components";

export const StyledHome = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 3.5rem;
    font-family: ${({ theme }) => theme.font.accent};
    color: ${({ theme }) => theme.colors.accent};
    margin: 0 0 20px 0;
  }
  h2 {
    font-size: 2.5rem;
    font-family: ${({ theme }) => theme.font.accent};
    margin: 0 0 10px 0;
  }
  h3 {
    margin-bottom: 50px;
  }
  a {
    text-decoration: none;
  }
  @media screen and (max-width: ${({ theme }) => theme.screen.xl}) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screen.large}) {
    flex-direction: column;
    justify-content: center;
    > div:nth-of-type(1) {
      margin: 100px 0;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.screen.small}) {
    height: auto;
    text-align: center;
    > div:nth-of-type(1) {
      margin: 20vh 0 50px;
    }
  }
`;
