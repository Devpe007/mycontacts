import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin-top: 16px;

  .details {
    margin-left: 24px;

    strong {
      display: block;

      margin-bottom: 8px;

      font-size: 22px;

      color: ${({ theme }) => theme.colors.danger.main};
    }
  }
`;
