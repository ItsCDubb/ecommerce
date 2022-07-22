import {FlatList, InteractionManager} from 'react-native';
import Product from '../../components/Product';
import products from '../../data/products';
import styles from './styles';

const Home = () => {
  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={({item}) => <Product item={item} />}
        style={styles.page}
      />
    </>
  );
};

export default Home;
