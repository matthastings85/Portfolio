import styled from "styled-components";

const StyledDarkModeToggle = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  height: 40px;
  font-size: 1.2rem;
  border-radius: 20px;
  position: relative;
  margin: 0 20px;

  div {
    margin: 0;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.secondary};
    position: absolute;
    transition: all 0.3s ease;
    left: ${({ darkMode }) => (darkMode ? "40px" : "0px")};
  }
  svg {
    padding: 10px;
    z-index: 10;
  }
`;

export default StyledDarkModeToggle;
