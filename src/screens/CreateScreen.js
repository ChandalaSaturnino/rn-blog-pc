import React, { useContext, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { Context } from '../context/BlogContext'

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('');
  const { addBlogPost } = useContext(Context)

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput 
          style={styles.input} 
          value={ title } 
          onChangeText={ (text) => setTitle(text) } 
        />
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput 
          style={styles.input} 
          value={ content } 
          onChangeText={ (text) => setContent(text) } 
        />
      </View>
      <Button 
        title='Add Blog Post' 
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate('Index')
          })
        }}
      />
    </View>
  )
}  

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  formContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    marginTop: 15,
    marginBottom: 10,
  },
})

export default CreateScreen