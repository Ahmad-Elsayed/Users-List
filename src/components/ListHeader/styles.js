import { StyleSheet } from 'react-native';
import { scale, verticalScale } from '../../utilities/Scaling';

export default StyleSheet.create({
  containerStyle: {
    paddingVertical: verticalScale(10),
  },
  titleStyle: {
    fontSize: scale(24),
    fontWeight: '600',
  },
});
