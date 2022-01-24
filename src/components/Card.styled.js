import styled from 'styled-components'

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  border-radius: 15px;
  color: white;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.20);
  margin: 40px 0;
  padding: 60px;
  text-align: center;
  flex-direction: ${({ layout }) => layout || 'row'};
  img {
    width: 80%;
  }
  & > div {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
  h2 {
      color: white;
      font-family: Brush Script MT;
      font-size: 40px;
      text-align: center;
      padding: 15px;
      text-shadow: 1px 3px #0D0D55;
  }


`