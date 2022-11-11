import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;

  margin-top: 16px;

  span {
    margin-left: 24px;

    word-break: break-word;

    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
