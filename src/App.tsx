/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';

import { Container } from './styles/App';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const [timer, setTimer] = useState(0);

  const [queue, setQueue] = useState<number[]>([]);
  const [queueStatus, setQueueStatus] = useState(false);
  const [queueNumber, setQueueNumber] = useState(0);

  const handleTimer = useCallback(() => {
    setTimer(timer + 1);
  }, [timer]);

  const handleQueueElement: any = useCallback(
    (elem: any) => {
      setQueue(prevState => {
        return [...prevState, elem];
      });
    },
    [queue, queueStatus, queueNumber],
  );

  console.log(queue);

  useEffect(() => {
    handleQueueElement(Math.random());
  }, []);
  useEffect(() => {
    handleQueueElement(Math.random());
  }, []);
  useEffect(() => {
    handleQueueElement(Math.random());
  }, []);
  useEffect(() => {
    handleQueueElement(Math.random());
  }, []);
  useEffect(() => {
    handleQueueElement(Math.random());
  }, []);
  useEffect(() => {
    handleQueueElement(Math.random());
  }, []);
  useEffect(() => {
    handleQueueElement(Math.random());
  }, []);
  useEffect(() => {
    handleQueueElement(Math.random());
  }, []);
  useEffect(() => {
    handleQueueElement(Math.random());
  }, []);
  useEffect(() => {
    handleQueueElement(Math.random());
  }, []);
  useEffect(() => {
    handleQueueElement(Math.random());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => handleTimer(), 1000);

    return () => {
      clearInterval(interval);
    };
  }, [handleTimer]);

  return (
    <>
      <GlobalStyle />
      <Container className="App">
        <div className="wrapper">
          <h2>Pedro&apos;s Dynamic Timer</h2>
          <p>{timer}</p>
        </div>
      </Container>
    </>
  );
};

export default App;
