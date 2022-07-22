import {useState} from 'react';
import {Text, View} from 'react-native';
import product from '../../data/product';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import colors from '../../theme/colors';
import ImageCarousel from '../../components/ImageCarousel';
import styles from './styles';

const Product = () => {
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null,
  );
  const [quantity, setQuantity] = useState(1);
  return (
    <View style={styles.root}>
      <Text style={styles.productTitle}>{product.title}</Text>
      {/* Image carousel */}
      <ImageCarousel images={product.images} />
      {/* Option selector */}
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map(option => (
          <Picker.Item key={option} label={option} value={option} />
        ))}
      </Picker>
      {/* Price */}
      <Text style={styles.price}>
        from ${product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}>${product.oldPrice}</Text>
        )}
      </Text>
      {/* Description */}
      <Text style={styles.productDescription}>{product.description}</Text>
      {/* Quantity selector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      {/* Buttons */}
      <Button
        text={'Add to cart'}
        onPress={() => {
          console.warn('Add');
        }}
        containerStyles={{backgroundColor: colors.yellow}}
      />
      <Button
        text={'Buy Now'}
        onPress={() => {
          console.warn('Buy');
        }}
      />
    </View>
  );
};

export default Product;
