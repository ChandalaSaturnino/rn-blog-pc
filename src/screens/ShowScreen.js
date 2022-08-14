import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'

const ShowScreen = ({route, navigation }) => {
  const { state } = useContext(Context)

  const { id } = route.params
  const blogPost = state.find((blogPost) => blogPost.id === id)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  content: {
    marginTop: 20,
    fontSize: 20,
  }
})

export default ShowScreen