import { useState, useEffect, useCallback } from 'react';

import { toastEventManager } from '../../../utils/toast';

export default function useToastContainer() {
  const [messages, setMessages] = useState([]);
  const [pendingRemovalMessagesId, setPendingRemovalMessagesId] = useState([]);

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Math.random(), type, text, duration,
        },
      ]);
    };

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, []);

  const handleRemoveMessage = useCallback((id) => {
    setPendingRemovalMessagesId(
      (prevState) => [...prevState, id],
    );
  }, []);

  return {
    messages,
    handleRemoveMessage,
    pendingRemovalMessagesId,
  };
};
