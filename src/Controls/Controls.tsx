import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RoundButton} from '../RoundButton/RoundButton';

interface Props {
  play: () => void;
  stop: () => void;
}
export const Controls = ({play, stop}: Props) => (
  <View style={styles.container}>
    <RoundButton onPress={play} iconName="play" />
    <RoundButton onPress={stop} iconName="stop" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#00000',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
