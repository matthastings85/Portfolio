import styled from "styled-components";

export const StyledSectionHeading = styled.h1`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.accent};
  width: 100%;
  position: relative;
  font-family: ${({ theme }) => theme.font.accent};

  &::after {
    content: "";
    display: block;
    position: relative;
    top: 1px;
    width: 400px;
    height: 2px;
    margin-left: 20px;
    background-color: ${({ theme }) => theme.colors.accent70};
  }
`;
