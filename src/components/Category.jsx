import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {fontSize, spacing} from '../constants/dimensions';
import {fontFamily} from '../constants/fonts';
import {colors} from '../constants/colors';
import {category} from '../data/category';

const Category = ({selectedCategory, handelUpdateCategory}) => {
  // state

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={category}
      renderItem={({item, index}) => (
        <TouchableOpacity onPress={() => handelUpdateCategory(item.name)}>
          <Text
            style={[
              styles.categoryText,
              selectedCategory === item.name && {
                color: colors.purple,
              },
            ]}>
            {item.name}
          </Text>
          {selectedCategory === item.name && <View style={styles.undeline} />}
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
      horizontal
      ItemSeparatorComponent={<View style={{paddingHorizontal: spacing.sm}} />}
      style={{padding: 10}}
    />
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryText: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.SemiBold,
    color: colors.gray,
  },
  undeline: {
    backgroundColor: colors.purple,
    borderBottomWidth: 2,
    width: '50%',
    marginTop: spacing.sm,
  },
});
