import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const ListHeader = ({ title }) => {
  if (!title) return null;

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};

export default ListHeader;
