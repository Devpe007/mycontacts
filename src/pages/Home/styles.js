import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  margin-top: 32px;
`;

export const InputSearchContainer = styled.div`
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

export const Header = styled.header`
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

export const ListHeader = styled.header`
  margin-top: 24px;
  margin-bottom: 8px;

  button {
    display: flex;
    align-items: center;

    border: none;

    background: transparent;

    span {
      margin-right: 8px;

      font-weight: bold;

      color: ${({ theme }) => theme.colors.primary.main};
    }

    img {
      transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)')};
      transition: transform 0.2s ease-in;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px;

  border-radius: 4px;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  background: #fff;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        padding: 4px;
        margin-left: 8px;

        border-radius: 4px;

        font-weight: bold;

        text-transform: uppercase;

        color: ${({ theme }) => theme.colors.primary.main};
        background: ${({ theme }) => theme.colors.primary.lighter};
      }
    }

    span {
      display: block;

      font-size: 14px;

      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      margin-left: 8px;

      border: none;

      background: transparent;
    }
  }
`;

export const ErrorContainer = styled.div`
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

export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 16px;

  p {
    margin-top: 8px;

    text-align: center;

    color: ${({ theme }) => theme.colors.gray[200]};

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const SearchNotFoundContainer = styled.div`
  display: flex;
  align-items: flex-start;

  margin-top: 16px;

  span {
    margin-left: 24px;

    word-break: break-word;

    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
