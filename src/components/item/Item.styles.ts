
import styled from 'styled-components';

export const Wrapper = styled.div`

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 20px;
  border: 1px solid lightblue;
  border-radius: 15px;
  height: 100%;
  width: auto;

  button{
    border-radius: 0 0 20px 20px;
  }

  img{
    max-height: auto;
    object-fit: center;
    border-radius: 20px 20px 0 0;
  }

  div{
    font-family: Arial, Halvetica, sans-serif;
    padding: 1rem;
    // height: 40%;
  }
`;