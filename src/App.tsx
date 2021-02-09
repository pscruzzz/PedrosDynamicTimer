import React, { useCallback, useEffect, useState } from 'react';

import { Container } from './styles/App';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const [timer, setTimer] = useState(0);

  const handleTimer = useCallback(() => {
    setTimer(timer + 1);
  }, [timer]);

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
        <h2>Pedro&apos;s Dynamic Timer</h2>
        <p>{timer}</p>
      </Container>
    </>
  );
};

export default App;
