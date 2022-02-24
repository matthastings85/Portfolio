import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  position: fixed;
  top: 0px;
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
