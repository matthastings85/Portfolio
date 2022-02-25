import styled from "styled-components";

const StyledContactFrom = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  max-width: 100%;
  box-shadow: ${({ theme }) => theme.shadow.one};
  padding: 20px;
  margin: 20px 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;

  input,
  textarea {
    width: 100%;
    font-size: 1.2rem;
    margin: 15px 0;
    padding: 5px;
    border: none;
    border-radius: 5px;
  }

  textarea {
    min-height: 100px;
  }
`;

export default StyledContactFrom;
