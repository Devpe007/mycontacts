import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  backdrop-filter: blur(5px);

  background: rgba(0, 0, 0, 0.6);
`;

export const Container = styled.div`
  padding: 24px;

  max-width: 450px;
  width: 100%;

  border-radius: 4px;

  box-shadow: rgba(0, 0, 0, 0.04);

  background: #fff;

  h1 {
    font-size: 22px;

    color: ${({ theme, danger }) => (
    danger ? theme.colors.danger.main : theme.colors.gray[900]
  )};
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-top: 32px;

  .cancel-button {
    margin-right: 8px;

    border: none;

    font-size: 16px;

    color: ${({ theme }) => theme.colors.gray[200]};
    background: transparent;
  }
`;
