import styled from "styled-components";

const StyledDarkModeToggle = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ hide, menu }) => (hide && !menu ? "40px" : "80px")};
  height: ${({ hide, menu }) => (hide && !menu ? "20px" : "40px")};
  font-size: ${({ hide, menu }) => (hide && !menu ? "0.8rem" : "1.2rem")};
  border-radius: 20px;
  position: relative;
  margin: 0 20px;
  cursor: pointer;
  transition: all 0.4s ease;

  div {
    margin: 0;
    border: none;
    width: ${({ hide, menu }) => (hide && !menu ? "20px" : "40px")};
    height: ${({ hide, menu }) => (hide && !menu ? "20px" : "40px")};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.secondary};
    position: absolute;
    transition: all 0.4s ease;
    left: ${({ darkMode, hide, menu }) =>
      (darkMode && !hide) || (darkMode && menu)
        ? "40px"
        : darkMode && hide && !menu
        ? "20px"
        : "0px"};
  }
  svg {
    padding: ${({ hide }) => (hide ? "3.5px" : "10px")};
    z-index: 10;
  }
`;

export default StyledDarkModeToggle;
