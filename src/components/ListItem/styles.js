import { StyleSheet, Platform } from 'react-native';
import colors from '../../assets/colors';
import { scale, verticalScale } from '../../utilities/Scaling';

export default StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.card,
    borderRadius: scale(6),
    borderWidth: 1,
    borderColor: colors.border,
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
    color: colors.primary,
    fontWeight: '600',
  },
  descriptionStyle: {
    color: colors.secondary,
    fontSize: scale(13),
    marginTop: verticalScale(4),
    fontWeight: '300',
  },
});
