import styled from "styled-components";

const StyledComplimentGenerator = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadow.two};

  p {
    font-family: ${({ theme }) => theme.font.accent};
    display: flex;
    align-items: center;
    min-height: 300px;
    font-size: 2rem;
    margin: 0;
    opacity: ${({ opacity }) => opacity};
    transition: opacity 0.5s ease;
  }

  h3 {
    margin: 20px 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.screen.xl}) {
    width: 300px;

    p {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.screen.large}) {
    width: 450px;

    p {
      font-size: 1.5rem;
      min-height: 186px;
    }
    h3 {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.screen.small}) {
    width: 95%;
  }
`;

export default StyledComplimentGenerator;
