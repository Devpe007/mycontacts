import {
  Container,
} from './styles';

import ToastMessage from '../ToastMessage';

import useToastContainer from './useToastContainer';

import useAnimatedList from '../../../hooks/useAnimatedList';

export default function ToastContainer() {
  const {
    handleRemoveItem,
    handleAnimationEnd,
  } = useToastContainer();

  const { renderList } = useAnimatedList();

  return (
    <Container>
      {renderList((message, { isLeaving }) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveItem}
          isLeaving={isLeaving}
          onAnimationEnd={handleAnimationEnd}
        />
      ))}
    </Container>
  );
};
