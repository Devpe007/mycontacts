import {
  Container,
} from './styles';

import ToastMessage from '../ToastMessage';

import useToastContainer from './useToastContainer';

export default function ToastContainer() {
  const {
    messages,
    handleRemoveMessage,
    pendingRemovalMessagesId,
    handleAnimationEnd,
  } = useToastContainer();

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveMessage}
          isLeaving={pendingRemovalMessagesId.includes(message.id)}
          onAnimationEnd={handleAnimationEnd}
        />
      ))}
    </Container>
  );
};
