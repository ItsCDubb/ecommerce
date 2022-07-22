import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: colors.white,
  },
  productTitle: {
    color: colors.black,
    fontSize: fonts.size.lg,
    fontWeight: fonts.weight.bold,
  },
  productDescription: {
    color: colors.darkblue1,
    marginVertical: 10,
    lineHeight: 20,
  },
  price: {
    color: colors.darkblue1,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.bold,
  },
  oldPrice: {
    fontSize: fonts.size.s,
    textDecorationLine: 'line-through',
  },
});
