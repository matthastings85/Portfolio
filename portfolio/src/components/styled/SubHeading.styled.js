import styled from "styled-components";

export const StyledSubHeading = styled.h2`
  display: flex;
  justify-content: center;
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
  }
  &::before {
    content: "";
    display: block;
    position: relative;
    top: 1px;
    width: 100px;
    height: 2px;
    margin-right: 20px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
