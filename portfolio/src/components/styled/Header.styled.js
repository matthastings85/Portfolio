import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 11;
  transition: all 0.5s ease;
  border-top: 5px solid ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.dark};
  box-shadow: ${({ theme }) => theme.shadow.one};
`;

export const Nav = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  transition: all 0.4s ease;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.light};
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ hide }) => (hide ? "1.3rem" : "3rem")};
    width: ${({ hide }) => (hide ? "25px" : "50px")};
    height: ${({ hide }) => (hide ? "25px" : "50px")};
    font-family: ${({ theme }) => theme.font.accent};
    margin: 5px 30px;
    border: 2px solid ${({ theme }) => theme.colors.accent};
    border-radius: 25%;
    transition: all 0.4s ease;

    @media screen and (max-width: ${({ theme }) => theme.screen.small}) {
      margin: 5px 15px;
    }
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${({ theme }) => theme.screen.xl}) {
    position: fixed;
    top: 0px;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 100px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: ${({ theme }) => theme.colors.dark};
    transform: ${({ menu }) => (menu ? "translateX(0%)" : "translateX(100%)")};
    transition: transform 1s ease;
    box-shadow: ${({ theme }) => theme.shadow.one};

    > * {
      margin: 20px 0;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.screen.small}) {
    width: 100%;
  }
`;
