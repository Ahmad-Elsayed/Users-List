import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const ListItem = ({ image, title, description }) => {
  return (
    <View style={styles.containerStyle}>
      <Image source={{ uri: image }} style={styles.imageStyle} />
      <View style={styles.itemDetailsContainerStyle}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.descriptionStyle}>{description}</Text>
      </View>
    </View>
  );
};

export default ListItem;
