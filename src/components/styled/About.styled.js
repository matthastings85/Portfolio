import styled from "styled-components";

export const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 100px 0;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (max-width: ${({ theme }) => theme.screen.large}) {
    > div {
      flex-direction: column;
    }
  }
  img {
    width: 400px;
    border-radius: 15px;
    margin: 15px;
    box-shadow: ${({ theme }) => theme.shadow.two};
    border: 10px solid ${({ theme }) => theme.colors.secondary};
  }
`;
