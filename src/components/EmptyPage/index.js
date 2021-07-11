import React from 'react';
import { Text, ActivityIndicator, View } from 'react-native';
import styles from './styles';
const EmptyPage = ({ isLoading }) => {
  return (
    <View style={styles.containerStyle}>
      {isLoading ? <ActivityIndicator /> : <Text>The List is empty</Text>}
    </View>
  );
};

export default EmptyPage;
