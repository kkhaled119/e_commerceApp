import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

// icons

import {colors} from '../constants/colors';
import {fontSize, spacing} from '../constants/dimensions';
import {fontFamily} from '../constants/fonts';

const CartButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  addToCartButton: {
    width: '90%',
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: spacing.md,
    gap: spacing.sm,
    backgroundColor: '#8743FF',
  },
  addToCartText: {
    color: colors.background,
    fontFamily: fontFamily.Bold,
    fontSize: fontSize.md,
  },
});
