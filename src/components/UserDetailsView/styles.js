import { StyleSheet } from 'react-native';
import { scale, verticalScale } from '../../utilities/Scaling';

export default StyleSheet.create({
  containerStyle: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(10),
  },
  imageStyle: {
    width: scale(120),
    height: scale(120),
    borderRadius: scale(60),
    alignSelf: 'center',
  },
  detailsItemTitleStyle: {
    textAlign: 'center',
    fontSize: scale(14),
    fontWeight: '500',
  },
  detailsItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(7),
    paddingVertical: verticalScale(10),
    borderBottomWidth: 1,
  },
  detailsContainerStyle: {
    paddingTop: verticalScale(30),
  },
});
