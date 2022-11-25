import React, { useEffect, useState } from 'react';

import ColorfulMessage from './components/ColorfulMessage';

const App = () => {
  const [num, setNum] = useState(0);
  const [showText, setShowText] = useState(true);

  const onClickCountUp = () => {
    setNum(num => num + 1);
  };

  const onClickShowText = () => {
    setShowText(!showText);
  };

  useEffect(() => {
    console.log('useEffect');
    if (num > 0) {
      if (num % 3 === 0) {
        showText || setShowText(true);
      } else {
        showText && setShowText(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは</h1>
      <ColorfulMessage color='blue'>お元気？</ColorfulMessage>
      <ColorfulMessage color='pink'>元気だよ</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickShowText}>show/hidden</button>
      {showText && <p>出たり消えたり</p>}
    </>
  );
};

export default App;
