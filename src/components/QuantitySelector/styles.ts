import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 130,
    borderWidth: 1,
    borderColor: colors.border,
  },
  button: {
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    backgroundColor: colors.grey,
  },
  buttonText: {
    fontSize: fonts.size.xlg,
  },
  quantity: {
    color: colors.lightblue,
  },
});
