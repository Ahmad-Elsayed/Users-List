import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import useThemedColors from '../../utilities/useThemedColors';

const ListItem = ({ image, title, description }) => {
  const { colors } = useThemedColors();

  return (
    <View
      style={[
        styles.containerStyle,
        {
          borderColor: colors.border,
          backgroundColor: colors.card,
        },
      ]}>
      <Image source={{ uri: image }} style={styles.imageStyle} />
      <View style={styles.itemDetailsContainerStyle}>
        <Text style={[styles.titleStyle, { color: colors.primary }]}>
          {title}
        </Text>
        <Text style={[styles.descriptionStyle, { color: colors.secondary }]}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default ListItem;
