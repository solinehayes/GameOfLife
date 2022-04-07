import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';

export const Game: FunctionComponent = () => {
  return <View style={styles.game} />;
};

const styles = StyleSheet.create({
  game: {
    borderColor: '#4935B1',
    margin: 10,
    flex: 1,
    borderWidth: 5,
  },
});
