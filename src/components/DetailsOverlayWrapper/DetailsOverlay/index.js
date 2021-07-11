import React from 'react';
import { BlurView } from '@react-native-community/blur';
import styles from './styles';
import { Pressable, View } from 'react-native';
import useThemedColors from '../../../utilities/useThemedColors';

const DetailsOverlay = ({ onClose, children }) => {
  const { colors } = useThemedColors();

  return (
    <>
      <BlurView blurType="dark" style={styles.overlayContainerStyle}>
        <Pressable style={styles.pressableStyle} onPress={onClose} />
      </BlurView>
      <View
        style={[styles.contentStyle, { backgroundColor: colors.background }]}>
        {children}
      </View>
    </>
  );
};

export default DetailsOverlay;
