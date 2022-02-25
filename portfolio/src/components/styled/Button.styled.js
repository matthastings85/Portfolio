import styled from "styled-components";

const StyledButton = styled.button`
  width: 250px;
  height: 60px;
  border: none;
  font-size: 1.5rem;
  border-radius: 5px;
  padding: 15px;
  box-shadow: ${({ theme }) => theme.shadow.one};
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:active {
    transform: translateY(3px);
  }
  @media screen and (max-width: ${({ theme }) => theme.screen.small}) {
    width: 150px;
    height: 40px;
    font-size: 1rem;
    padding: 10px;
  }
`;

export const MainBtn = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colors.accent70};
  color: ${({ theme }) => theme.colors.light};
  transition: all 0.2s linear 0s;
  margin: 10px;

  &:before {
    content: "\f054";
    font-family: FontAwesome;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0px;
    height: 100%;
    width: 35px;
    border-radius: 0 50% 50% 0;
    background-color: ${({ theme }) => theme.colors.accent70};
    transform: scale(0, 1);
    transform-origin: left center;
    transition: all 0.2s linear 0s;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.dark};
    text-indent: 30px;
    background-color: ${({ theme }) => theme.colors.accent};

    &:before {
      transform: scale(1, 1);
      text-indent: 0;
    }
  }
`;

export const AltBtn = styled(StyledButton)`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accent};
  margin: 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.dark};
    border-color: ${({ theme }) => theme.colors.accent};
    transition: border 0.3s;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.3s, border 0.3s;
  }

  &:hover::before {
    opacity: 0;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 260px;
    height: 260px;
    background-color: ${({ theme }) => theme.colors.accent};
    border-color: transparent;
    border-radius: 50%;
    transform: translate(-7px, -100px) scale(0.1);
    opacity: 0;
    z-index: -1;
    transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
  }

  &:hover::after {
    opacity: 1;
    transform-origin: center;
    transform: scale(1) translate(-7px, -100px);
  }
`;

export const NavBtn = styled.button`
  position: relative;
  background: transparent;
  border: none;
  padding: 0.7rem 2.5rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.secondary};
  transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
  cursor: pointer;
  user-select: none;
  z-index: 100;

  &:before,
  &:after {
    content: "";
    position: absolute;
    transition: inherit;
    z-index: -1;
    top: 0;
    width: 0;
    height: 100%;
  }
  &:before {
    left: 0;
    border: 1px solid ${({ theme }) => theme.colors.accent};
    border-left: 0;
    border-right: 0;
  }
  &:after {
    right: 0;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.dark};
    transition-delay: 0.5s;
    z-index: 100;
  }
  &:hover:before {
    transition-delay: 0s;
  }
  &:hover:after {
    background: ${({ theme }) => theme.colors.accent};
    transition-delay: 0.35s;
  }
  &:hover:before,
  &:hover:after {
    width: 100%;
  }
`;
