import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    height: 35,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors.orange,
  },
  text: {
    color: colors.white,
    fontSize: fonts.size.md,
  },
});
