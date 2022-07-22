import {Image, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import styles from './styles';

interface IProductProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

const Product = ({item}: IProductProps) => {
  return (
    <View style={styles.root}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.title}>
          {item.title}
        </Text>
        <View style={styles.ratingContainer}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <FontAwesome
              key={`${item.id}-${i}`}
              name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
              size={fonts.size.md}
              color={colors.orange}
              style={styles.rating}
            />
          ))}
          <Text>{item.ratings}</Text>
        </View>
        <Text style={styles.price}>
          from ${item.price}
          {item.oldPrice && (
            <Text style={styles.oldPrice}>${item.oldPrice}</Text>
          )}
        </Text>
      </View>
    </View>
  );
};

export default Product;
