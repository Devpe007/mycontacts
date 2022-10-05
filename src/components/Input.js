import styled, { css } from 'styled-components';

export default styled.input`
  padding: 0 16px;

  width: 100%;
  height: 52px;

  border-radius: 4px;
  border: none;
  border: 2px solid #fff;

  outline: none;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  font-size: 16px;

  background: #fff;

  appearance: none;

  transition: border 0.2s ease-in;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) => error && css`
    border-color: ${theme.colors.danger.main} !important;

    color: ${theme.colors.danger.main};
  `}

  &[disabled] {
    border-color: ${({ theme }) => theme.colors.gray[200]};

    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`;
