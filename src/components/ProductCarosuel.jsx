import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {spacing} from '../constants/dimensions';
import {colors} from '../constants/colors';

const screenWidth = Dimensions.get('window');

const ProductCarosuel = ({images}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const onViewRef = useRef(viewableItems => {
    if (viewableItems.viewableItems.length > 0) {
      setActiveSlide(viewableItems.viewableItems[0].index);
    }
  });
  return (
    <>
      <FlatList
        data={images}
        renderItem={({item}) => {
          return (
            <View style={styles.productImageWrapper}>
              <Image source={{uri: item}} style={styles.productImage} />
            </View>
          );
        }}
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        snapToInterval={screenWidth}
        decelerationRate={'fast'}
        onViewableItemsChanged={onViewRef.current}
        keyExtractor={(item, index) => item}
      />
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            style={[
              styles.dot,
              index === activeSlide && {
                width: 20,
                borderRadius: 32,
              },
              {
                backgroundColor:
                  index === activeSlide ? colors.purple : colors.gray,
              },
            ]}
          />
        ))}
      </View>
    </>
  );
};

export default ProductCarosuel;

const styles = StyleSheet.create({
  productImageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth,
    padding: spacing.sm,
  },

  productImage: {
    height: 350,
    width: 350,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: spacing.md,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: spacing.xs,
    backgroundColor: colors.gray,
  },
});
