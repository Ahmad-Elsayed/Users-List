import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import useThemedColors from '../../utilities/useThemedColors';

const ListHeader = ({ title }) => {
  const { colors } = useThemedColors();
  if (!title) return null;

  return (
    <View style={styles.containerStyle}>
      <Text style={[styles.titleStyle, { color: colors.primary }]}>
        {title}
      </Text>
    </View>
  );
};

export default ListHeader;
