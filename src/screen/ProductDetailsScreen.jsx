import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import Header from '../components/Header';
import ProductCarosuel from '../components/ProductCarosuel';
import {fontSize, spacing} from '../constants/dimensions';
import {colors} from '../constants/colors';
import {fontFamily} from '../constants/fonts';
import CartButton from '../components/CartButton';

const colorData = [
  {
    colorName: 'Silver',
    colorValue: '#F0F2F2',
  },
  {
    colorName: 'Bright Orange',
    colorValue: '#F25745',
  },
  {
    colorName: 'Starlight',
    colorValue: '#FAF6F2',
  },
];

const ProductDetailsScreen = () => {
  const item = useRoute().params.item;
  const [selectedTab, setSelectedTab] = useState('Details');

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <ProductCarosuel images={item.images} />
        <View style={styles.titleContainer}>
          <View style={styles.titleWrapper}>
            <Text style={styles.productTitle}>{item.name}</Text>
            <Text style={styles.brand}>{item.brand}</Text>
          </View>
        </View>
        <View style={styles.colorContainer}>
          <Text style={styles.colorHeading}>Colors</Text>
          <View style={styles.parentSelectColorContainer}>
            <FlatList
              data={colorData}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={[
                    styles.selectColorContainer,
                    {
                      borderColor: colors.purple,
                    },
                  ]}>
                  <View
                    style={[
                      styles.circleColor,
                      {backgroundColor: item.colorValue},
                    ]}
                  />
                  <Text style={styles.colorText}>{item.colorName}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.colorValue}
              horizontal
            />
          </View>
        </View>
        <View style={styles.detailsReviewTabs}>
          <TouchableOpacity
            onPress={() => {
              setSelectedTab('Details');
            }}>
            <Text
              style={[
                styles.tabText,
                selectedTab == 'Details' && {color: colors.purple},
              ]}>
              Details
            </Text>
            {selectedTab === 'Details' && <View style={styles.underline} />}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedTab('Review');
            }}>
            <Text
              style={[
                styles.tabText,
                selectedTab === 'Review' && {color: colors.purple},
              ]}>
              Review
            </Text>
            {selectedTab === 'Review' && <View style={styles.underline} />}
          </TouchableOpacity>
        </View>
        <Text style={styles.detailsContent}>
          {selectedTab === 'Details' ? item.details : item.review}
        </Text>

        <CartButton />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#DCDCDC',
  },
  titleContainer: {
    flexDirection: 'row',
  },
  titleWrapper: {
    flex: 1,
    padding: 10,
  },
  productTitle: {
    fontFamily: 'bold',
    color: 'black',
    fontSize: 20,
  },
  brand: {
    fontFamily: fontFamily.Medium,
    color: colors.gray,
    fontSize: fontSize.sm,
    paddingVertical: spacing.md,
  },
  colorContainer: {
    paddingTop: spacing.md,
  },
  colorHeading: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.SemiBold,
    color: colors.black,
    paddingBottom: spacing.md,
  },
  selectColorContainer: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 4,
    padding: spacing.sm,
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  circleColor: {
    height: spacing.md,
    width: spacing.md,
    borderRadius: spacing.md / 2,
  },
  colorText: {
    fontSize: fontSize.sm,
    fontFamily: fontFamily.Medium,
    color: colors.black,
  },
  detailsReviewTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: spacing.md,
  },
  tabText: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.SemiBold,
    color: colors.black,
  },
  underline: {
    height: 2,
    backgroundColor: colors.purple,
    marginTop: spacing.sm,
  },
  detailsContent: {
    padding: spacing.md,
    fontSize: fontSize.sm,
    color: colors.black,
    fontFamily: fontFamily.Regular,
  },
});
