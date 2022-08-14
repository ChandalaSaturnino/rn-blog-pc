import React, { useContext } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  FlatList, 
  Button, 
  TouchableOpacity 
} from 'react-native';
import { Context } from '../context/BlogContext';

import {Feather} from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context)

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={ state }
          keyExtractor={(blogPost) => blogPost.title}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={ () => navigation.navigate('Show', { id: item.id }) }
              >
                <View style={styles.row}>
                  <Text style={styles.title}>{ item.title } - { item.id }</Text>
                  <TouchableOpacity
                    onPress={ () => deleteBlogPost(item.id) }
                  >
                    <Feather name="trash-2" style={styles.icon} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
    color: 'red',
  },
})

export default IndexScreen;
