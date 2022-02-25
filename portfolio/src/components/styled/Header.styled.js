import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  position: fixed;
  top: ${({ hide }) => hide};
  z-index: 11;
  transition: all 0.5s ease;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 5px solid ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.dark90};
  box-shadow: ${({ theme }) => theme.shadow.one};

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    width: 50px;
    height: 50px;
    font-family: ${({ theme }) => theme.font.accent};
    margin: 5px 30px;
    border: 2px solid ${({ theme }) => theme.colors.accent};
    border-radius: 25%;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${({ theme }) => theme.screen.xl}) {
    position: fixed;
    top: 85px;
    right: 0;
    height: 100vh;
    width: 100%;
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
