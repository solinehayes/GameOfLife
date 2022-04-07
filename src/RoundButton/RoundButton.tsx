import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface props {
  onPress: () => void;
  iconName: string;
}
export const RoundButton = ({onPress, iconName}: props) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Icon
      name={iconName}
      size={30}
      color="#C43BAD"
      style={{justifyContent: 'center'}}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    marginHorizontal: 20,
  },
});
