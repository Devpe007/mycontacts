import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleIn = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`;

const scaleOut = keyframes`
  from { transform: scale(1); }
  to { transform: scale(0); }
`;

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  backdrop-filter: blur(5px);

  background: rgba(0, 0, 0, 0.6);

  animation: ${fadeIn} 0.3s forwards;

  ${({ isLeaving }) => isLeaving && css`
    animation: ${fadeOut} 0.2s forwards;
  `}
`;

export const Container = styled.div`
  padding: 24px;

  max-width: 450px;
  width: 100%;

  border-radius: 4px;

  box-shadow: rgba(0, 0, 0, 0.04);

  background: #fff;

  animation: ${scaleIn} 0.3s;

  ${({ isLeaving }) => isLeaving && css`
    animation: ${scaleOut} 0.2s forwards;
  `}

  > h1 {
    font-size: 22px;

    color: ${({ theme, danger }) => (
    danger ? theme.colors.danger.main : theme.colors.gray[900]
  )};
  }

  .modal-body {
    margin-top: 32px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-top: 32px;

  .cancel-button {
    margin-right: 24px;

    border: none;

    font-size: 16px;

    color: ${({ theme }) => theme.colors.gray[200]};
    background: transparent;

    &[disabled] {
      cursor: not-allowed;
    }
  }
`;
