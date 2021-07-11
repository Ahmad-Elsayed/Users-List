import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
import { scale } from '../../../utilities/Scaling';
export default StyleSheet.create({
  overlayContainerStyle: {
    flex: 1,
  },
  pressableStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  contentStyle: {
    position: 'absolute',
    top: '10%',
    bottom: '10%',
    left: '10%',
    right: '10%',
    backgroundColor: colors.background,
    borderRadius: scale(15),
  },
});
