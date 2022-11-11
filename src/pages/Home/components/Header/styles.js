import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};

  padding-bottom: 16px;
  margin-top: 32px;
  margin-bottom: 8px;

  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};

  strong {
    font-size: 24px;
  }

  a {
    padding: 8px 16px;

    text-decoration: none;

    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;

    font-weight: bold;

    color: ${({ theme }) => theme.colors.primary.main};

    transition: all 0.2s ease-in;

    &:hover {
      color: #fff;
      background: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;
