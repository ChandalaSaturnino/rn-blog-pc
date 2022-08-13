import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import {Feather} from '@expo/vector-icons'

const IndexScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Index <Feather name="trash"></Feather></Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({})

export default IndexScreen;
