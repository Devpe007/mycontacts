import {
  Container,
} from './styles';

import ToastMessage from '../ToastMessage';

import useToastContainer from './useToastContainer';

import useAnimatedList from '../../../hooks/useAnimatedList';

export default function ToastContainer() {
  const {
    handleRemoveItem,
  } = useToastContainer();

  const { renderList } = useAnimatedList();

  return (
    <Container>
      {renderList((message, { isLeaving, animatedRef }) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveItem}
          isLeaving={isLeaving}
          animatedRef={animatedRef}
        />
      ))}
    </Container>
  );
};
