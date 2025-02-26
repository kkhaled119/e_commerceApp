import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import {fontSize, spacing} from '../constants/dimensions';
import {fontFamily} from '../constants/fonts';
import {useNavigation} from '@react-navigation/native';

const imageUri =
  'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694711060/Croma%20Assets/Communication/Wearable%20Devices/Images/301048_0_x1euf9.png';

const ProductCard = ({item}) => {
  const navigation = useNavigation();

  const handelProductDetailsScreen = () => {
    navigation.navigate('Product_Details', {item});
  };
  return (
    <TouchableOpacity
      onPress={handelProductDetailsScreen}
      style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{uri: item.image}} style={styles.productImage} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.name} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: '48%',
    backgroundColor: '#DCDCDC',
    borderRadius: 12,
    marginVertical: spacing.md,
    marginLeft: 10,
  },
  imageWrapper: {
    borderRadius: 12,
    backgroundColor: '#FFC8B7',
    margin: spacing.sm,
  },
  productImage: {
    height: 115,
    width: '100%',
    resizeMode: 'center',
  },

  contentContainer: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.md,
  },
  name: {
    color: colors.black,
    fontSize: fontSize.md,
    fontFamily: fontFamily.SemiBold,
  },
  brand: {
    color: colors.black,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.Medium,
    paddingVertical: spacing.xs,
  },
  price: {
    color: colors.purple,
    fontSize: fontSize.md,
    fontFamily: fontFamily.md,
  },
});
