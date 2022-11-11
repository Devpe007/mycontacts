import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  input {
    padding: 0 16px;

    width: 100%;
    height: 50px;

    border: none;
    border-radius: 25px;

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    outline: 0;

    background: '#fff';

    &::placeholder {
      color: #bcbcbc;
    }
  }
`;
