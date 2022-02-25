import styled from "styled-components";

const StyledMobileMenu = styled.div`
  display: none;
  padding: 0.5rem;
  cursor: pointer;

  > * {
    height: 3px;
    width: 35px;
    margin: 0.5rem 0;
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: transform 0.75s ease, opacity 0.75s ease, width 0.75s ease;
    border-radius: 2px;
    &:nth-of-type(1) {
      transform: ${(props) =>
        props.menu && "translate(-10px) rotate(45deg) translate(15px)"};
    }
    &:nth-of-type(2) {
      width: 30px;
      opacity: ${(props) => props.menu && "0"};
    }
    &:nth-of-type(3) {
      width: 25px;
      transform: ${(props) =>
        props.menu && "translate(-10px) rotate(-45deg) translate(15px)"};
      width: ${(props) => props.menu && "35px"};
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screen.xl}) {
    display: block;
  }
`;

export default StyledMobileMenu;
