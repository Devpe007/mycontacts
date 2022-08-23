import styled from 'styled-components';

export default styled.button`
  padding: 0 16px;

  height: 52px;

  border: none;
  border-radius: 4px;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  font-size: 16px;
  font-weight: bold;

  color: #fff;
  background: ${({ theme }) => theme.colors.primary.main};

  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    cursor: default;

    background: #ccc;
  }
`;
