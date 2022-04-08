import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import {Controls} from '../Controls/Controls';

export const Game: FunctionComponent = () => {
  return (
    <View style={styles.game}>
      <View style={styles.grid} />
      <Controls play={() => {}} stop={() => {}} getRandomizedMap={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  game: {
    margin: 10,
    flex: 1,
  },
  grid: {
    borderColor: '#4935B1',
    borderWidth: 5,
    height: 650,
  },
});
