import { StyleSheet } from 'react-native';
import { scale } from '../../../utilities/Scaling';
export default StyleSheet.create({
  overlayContainerStyle: {
    flex: 1,
  },
  pressableStyle: {
    flex: 1,
  },
  contentStyle: {
    position: 'absolute',
    top: '10%',
    bottom: '10%',
    left: '10%',
    right: '10%',
    borderRadius: scale(15),
  },
});
