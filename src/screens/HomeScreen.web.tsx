import React from 'react';
import {Counter} from '@components/Counter';
import {GameView} from '@components/GameView';

const styles: {[key in string]: React.CSSProperties} = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
  },
};

export function HomeScreen(): React.ReactElement {
  return (
    <div style={styles.container}>
      <h1 style={styles.titleText}>React Dom</h1>
      <Counter />
      <GameView />
    </div>
  );
}