import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.grey,
    backgroundColor: colors.white,
  },
  image: {
    flex: 2,
    aspectRatio: 1,
    width: 150,
    resizeMode: 'contain',
  },
  rightContainer: {
    flex: 3,
    padding: 10,
  },
  title: {
    color: colors.black,
    fontSize: fonts.size.lg,
    fontWeight: fonts.weight.bold,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  rating: {
    margin: 2,
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
