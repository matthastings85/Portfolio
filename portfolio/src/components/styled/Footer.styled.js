import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};

  a {
    color: ${({ theme }) => theme.colors.dark};
    margin: 10px;
    font-size: 2rem;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
  div {
    color: ${({ theme }) => theme.colors.dark};
    font-family: ${({ theme }) => theme.font.accent};
    font-size: 0.8rem;
  }
`;

export default StyledFooter;
