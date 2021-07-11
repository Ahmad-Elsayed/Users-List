import { StyleSheet } from 'react-native';
import { verticalScale, scale } from '../../utilities/Scaling';

export default StyleSheet.create({
  containerStyle: {
    paddingTop: verticalScale(25),
    paddingHorizontal: scale(16),
  },
  separatorStyle: {
    height: verticalScale(7),
  },
  footerStyle: {
    height: verticalScale(30),
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
});
