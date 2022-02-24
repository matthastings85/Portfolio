import styled from "styled-components";

export const StyledHome = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 3.5rem;
    font-family: ${({ theme }) => theme.font.accent};
    color: ${({ theme }) => theme.colors.accent};
    margin: 0 0 20px 0;
  }
  h2 {
    font-size: 2.5rem;
    font-family: ${({ theme }) => theme.font.accent};
    margin: 0 0 10px 0;
  }
  h3 {
    margin-bottom: 50px;
  }
`;
