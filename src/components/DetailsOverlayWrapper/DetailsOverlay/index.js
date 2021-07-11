import React from 'react';
import { BlurView } from '@react-native-community/blur';
import styles from './styles';
import { Pressable, View } from 'react-native';

const DetailsOverlay = ({ onClose, children }) => {
  return (
    <BlurView blurType="dark" style={styles.overlayContainerStyle}>
      <Pressable style={styles.pressableStyle} onPress={onClose} />
      <View style={styles.contentStyle}>{children}</View>
    </BlurView>
  );
};

export default DetailsOverlay;
