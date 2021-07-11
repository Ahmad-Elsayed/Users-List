import { StyleSheet } from 'react-native';
import { scale, verticalScale } from '../../utilities/Scaling';

export default StyleSheet.create({
  containerStyle: {
    borderRadius: scale(6),
    borderWidth: 1,
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(8),
    flexDirection: 'row',
  },
  imageStyle: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
  },
  itemDetailsContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: scale(13),
  },
  titleStyle: {
    fontSize: scale(16),
    fontWeight: '600',
  },
  descriptionStyle: {
    fontSize: scale(13),
    marginTop: verticalScale(4),
    fontWeight: '300',
  },
});
