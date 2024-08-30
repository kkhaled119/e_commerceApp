import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const handelBack = () => {
    navigation.navigate('Home');
  };
  return (
    <View>
      <TouchableOpacity onPress={handelBack}>
        <Text style={{fontSize: 30, marginBottom: 10, marginLeft: 4}}>🔙</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
