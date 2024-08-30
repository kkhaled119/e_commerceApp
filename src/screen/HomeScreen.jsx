import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {fontSize, iconSize, spacing} from '../constants/dimensions';
import {colors} from '../constants/colors';
import {fontFamily} from '../constants/fonts';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import {smartWatch} from '../data/smartwatch';
import {headphones} from '../data/headphones';
import {apple} from '../data/apple';
import {samsung} from '../data/samsung';

const HomeScreen = () => {
  const [data, setData] = useState(smartWatch);
  const [selectedCategory, setSelectedCategory] = useState('Smart Watch');

  const handelUpdateCategory = newCategory => {
    if (newCategory === 'Smart Watch') {
      setSelectedCategory('Smart Watch');
      setData(smartWatch);
    } else if (newCategory === 'Headphones') {
      setSelectedCategory('Headphones');
      setData(headphones);
    } else if (newCategory === 'Apple') {
      setSelectedCategory('Apple');
      setData(apple);
    } else if (newCategory === 'Samsung') {
      setSelectedCategory('Samsung');
      setData(samsung);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Text style={styles.headline}>Find your suitable watch now.</Text>
            <View style={styles.mainInputContainer}>
              <View style={styles.inputWrapper}>
                {/*Icon */}
                <Image
                  source={require('../assets/search.png')}
                  style={styles.logo}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Search product"
                  placeholderTextColor={colors.placeholderText}
                />
              </View>
              <View style={styles.categoryContainer}>
                <Image
                  source={require('../assets/category.png')}
                  style={styles.logo}
                />
              </View>
            </View>
            <Category
              selectedCategory={selectedCategory}
              handelUpdateCategory={handelUpdateCategory}
            />
          </>
        }
        data={data}
        renderItem={({item, index}) => <ProductCard item={item} />}
        numColumns={2}
        style={{marginRight: 10}}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: spacing.md,
          paddingBottom: 100,
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    //
  },
  headline: {
    fontSize: fontSize.xxl,
    color: colors.black,
    fontFamily: fontFamily.Bold,
    marginHorizontal: 15,
  },
  mainInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginVertical: 30,
  },
  logo: {
    height: iconSize.md,
    width: iconSize.md,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: spacing.md,
    fontSize: fontSize.md,
    fontFamily: fontFamily.Medium,
  },
  inputWrapper: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.placeholderText,
    borderRadius: 44,
  },
  categoryContainer: {
    paddingHorizontal: spacing.sm,
  },
});
