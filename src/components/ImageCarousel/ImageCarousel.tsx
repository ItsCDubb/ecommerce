import {useState} from 'react';
import {FlatList, Image, useWindowDimensions, View} from 'react-native';
import colors from '../../theme/colors';
import styles from './styles';

const ImageCarousel = ({images}: {images: string[]}) => {
  const windowDimensions = useWindowDimensions().width;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View style={styles.root}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={images}
        renderItem={({item}) => (
          <Image
            source={{uri: item}}
            style={[styles.image, {width: windowDimensions - 40}]}
          />
        )}
        snapToInterval={windowDimensions - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={({viewableItems}) => {
          console.log(viewableItems);
        }}
      />
      <View style={styles.dotContainer}>
        {images.map((image, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  index === activeIndex ? colors.grey : colors.white,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;
