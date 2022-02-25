import styled from "styled-components";

export const StyledSubHeading = styled.h2`
  display: flex;
  justify-content: center;
  white-space: nowrap;
  align-items: center;
  width: 100%;
  position: relative;
  margin: 40px 0 20px;

  &::after {
    content: "";
    display: block;
    position: relative;
    top: 1px;
    width: 100px;
    height: 2px;
    margin-left: 20px;
    background-color: ${({ theme }) => theme.colors.secondary};
    flex-shrink: 2;
  }
  &::before {
    content: "";
    display: block;
    position: relative;
    top: 1px;
    width: 100px;
    height: 2px;
    flex-shrink: 2;
    margin-right: 20px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media screen and (max-width: ${({ theme }) => theme.screen.large}) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.screen.small}) {
    font-size: 1.2rem;
  }
`;
