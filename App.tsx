/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Game} from './src/Game/Game';

const App = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle]}>{'Game of Life'}</Text>
      <Game />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  sectionTitle: {
    margiTop: 20,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: '#C43BAD',
  },
});

export default App;
